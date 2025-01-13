// filepath: src/components/LiveFaceRecognition.tsx
import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

interface LiveFaceRecognitionProps {
  onFaceDetected: (detections: faceapi.WithFaceDescriptor<faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection; }, faceapi.FaceLandmarks68>>[]) => void;
}

const LiveFaceRecognition: React.FC<LiveFaceRecognitionProps> = ({ onFaceDetected }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      startVideo();
    }
  }, [modelsLoaded]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error('Error accessing webcam: ', err));
  };

  const handleVideoPlay = () => {
    setInterval(async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors();
        if (detections.length > 0) {
          onFaceDetected(detections);
        }
      }
    }, 1000);
  };

  return (
    <div>
      <video ref={videoRef} onPlay={handleVideoPlay} autoPlay muted width="720" height="560" />
    </div>
  );
};

export default LiveFaceRecognition;