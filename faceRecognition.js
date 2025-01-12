import * as faceapi from 'face-api.js';

export async function loadModels() {
  const MODEL_URL = '/models';
  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
}

export async function detectAndRecognizeFaces(inputImgElement) {
  const detections = await faceapi.detectAllFaces(inputImgElement).withFaceLandmarks().withFaceDescriptors();
  return detections;
}
