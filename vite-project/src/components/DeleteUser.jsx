import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteUser } from '../api';

const DeleteUser = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      alert('User deleted successfully!');
      history.push('/read'); // Redirect to the Read Users page
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Are you sure you want to delete this user?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
};

export default DeleteUser;
