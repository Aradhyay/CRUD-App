import React, { useState } from 'react';
import { createUser } from '../api';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, age };

    try {
      await createUser(userData);
      alert('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <label>Age:</label>
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        required
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
