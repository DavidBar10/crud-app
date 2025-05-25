import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    addUser({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Nombre"
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default UserForm;