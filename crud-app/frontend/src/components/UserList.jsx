import React from 'react';

const UserList = ({ users, deleteUser }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name} <button onClick={() => deleteUser(user.id)}>Eliminar</button>
      </li>
    ))}
  </ul>
);

export default UserList;