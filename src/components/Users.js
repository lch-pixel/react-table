import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); 
    };
    fetchUsers();
  }, []);

  if (users==null) return <div>로딩중</div>;
  
  return (
    <table>
      {users.map(user => (
        <tr>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
      ))}
    </table>
  );
}

export default Users;