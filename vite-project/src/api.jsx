import axios from 'axios';

const API_URL = "http://localhost:5000/api/users";

// Create User
export const createUser = (userData) => {
  return axios.post(API_URL, userData);
};

// Get Users
export const getUsers = () => {
  return axios.get(API_URL);
};

// Get Single User by ID
export const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update User
export const updateUser = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete User
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
