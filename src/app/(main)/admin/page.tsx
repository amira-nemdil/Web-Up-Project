'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);

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



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      
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

     
    </div>
  );
}
