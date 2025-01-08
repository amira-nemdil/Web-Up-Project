'use client';

import { useEffect, useRef, useState } from 'react';
import { loadModels, detectAndRecognizeFaces } from '../faceRecognition';
export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [recognitionResults, setRecognitionResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch the users data
    async function fetchUsers() {
      const response = await fetch('/api/dataTables/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    loadModels();
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const imageURL = URL.createObjectURL(image);
      const imgElement = new Image();
      imgElement.src = imageURL;
      imgElement.onload = async () => {
        const results = await detectAndRecognizeFaces(imgElement);
        setRecognitionResults(results);
      };
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <input type="file" ref={inputRef} onChange={handleImageUpload} />
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Role</th>
            <th>Created</th>
            <th>Updated</th>
            <th>AgencyId</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatarUrl} alt={user.name} width={50} height={50} />
              </td>
              <td>{user.role}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td>{user.agencyId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {recognitionResults.map((result, index) => (
          <div key={index}>
            <p>Detected face {index + 1}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
}
