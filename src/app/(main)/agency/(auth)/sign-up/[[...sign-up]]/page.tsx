"use client";
import React, { useState } from 'react';
import LiveFaceRecognition from '@/components/LiveFaceRecognition';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  const [faceDescriptors, setFaceDescriptors] = useState(null);

  const handleFaceDetected = (detections) => {
    if (detections.length > 0) {
      const descriptors = detections.map(d => d.descriptor);
      setFaceDescriptors(descriptors);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      faceDescriptors,
    };
    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      alert('Sign up successful!');
    } else {
      alert('Sign up failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <LiveFaceRecognition onFaceDetected={handleFaceDetected} />
        <button type="submit">Sign Up</button>
      </form>
      <SignUp />
    </div>
  );
};

export default SignUpPage;