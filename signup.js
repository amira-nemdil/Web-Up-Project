import { loadModels, detectAndRecognizeFaces } from './faceRecognition';

async function setupCamera() {
  const video = document.getElementById('video');
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;
}

async function captureFace() {
  const video = document.getElementById('video');
  const detections = await detectAndRecognizeFaces(video);
  console.log(detections);
}

document.getElementById('capture').addEventListener('click', captureFace);
loadModels().then(setupCamera);
const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const signupForm = document.getElementById('signup-form');
let faceDescriptors = null;

Promise.all([
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => console.error('Error accessing webcam: ', err));
}

captureButton.addEventListener('click', async () => {
  const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
  if (detections.length > 0) {
    faceDescriptors = detections.map(d => d.descriptor);
    alert('Face captured successfully!');
  } else {
    alert('No face detected. Please try again.');
  }
});

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!faceDescriptors) {
    alert('Please capture your face before signing up.');
    return;
  }

  const formData = new FormData(signupForm);
  const userData = {
    username: formData.get('username'),
    password: formData.get('password'),
    faceDescriptors
  };

  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    alert('Sign up successful!');
  } else {
    alert('Sign up failed. Please try again.');
  }
});