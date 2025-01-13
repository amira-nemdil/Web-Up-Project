"use client";
import { SignIn } from '@clerk/nextjs';
import React, { useState } from 'react';
import LiveFaceRecognition from '@/components/LiveFaceRecognition';

const SignInPage = () => {
  const [useFaceRecognition, setUseFaceRecognition] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);

  const handleFaceDetected = async (detections) => {
    if (detections.length > 0) {
      const descriptors = detections.map(d => d.descriptor);
      const response = await fetch('http://localhost:3001/api/getFaceDescriptors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ descriptors }),
      });
      const { match } = await response.json();
      if (match) {
        setFaceDetected(true);
      } else {
        alert('Face not recognized. Please try again.');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (useFaceRecognition && !faceDetected) {
      alert('Face not recognized. Please try again.');
      return;
    }
    // Handle the sign-in logic here
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {!useFaceRecognition && (
          <SignIn />
        )}
        {useFaceRecognition && <LiveFaceRecognition onFaceDetected={handleFaceDetected} />}
        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => setUseFaceRecognition(!useFaceRecognition)}>
        {useFaceRecognition ? 'Use Email/Password' : 'Use Face Recognition'}
      </button>
    </div>
  );
};

export default SignInPage;