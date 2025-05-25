import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = (user) => {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(newUser => setUsers([...users, newUser]));
  };

  const deleteUser = (id) => {
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.id !== id)));
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;