import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserById, updateUser } from '../api';

const UpdateUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(id);
        setName(response.data.name);
        setAge(response.data.age);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { name, age };

    try {
      await updateUser(id, updatedData);
      alert('User updated successfully!');
      history.push('/read'); // Redirect to the Read Users page
    } catch (error) {
      console.error('Error updating user:', error);
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
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
