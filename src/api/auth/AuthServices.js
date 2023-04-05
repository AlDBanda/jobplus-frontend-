const BASE_URL = import.meta.env.VITE_STRAPI_API_URL;
import axios from 'axios';
import api from '../api';



export const createUser = async (user) => {
  let response, error;

  try {
    const res = await api.post('/auth/local/register', user);
    response = res.data;
  } catch (err) {
    error = err.response.data.error;
  }

  return { response, error };
}

export const loginUser = async (user) => {
  let response, error;

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/local`,
      user
    );
    response = res.data;
  } catch (err) {
    error = err.response.data.error;
  }
  
  return { response, error };
}

export const forgotPassword = async (email) => {
  let response, error;

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/forgot-password`,
      email
    );
    response = res.data;
  } catch (err) {
    error = err.response.data.error;
  }

  return { response, error };
}

export const resetPassword = async (data) => {
  let response, error;

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/reset-password`,
      data
    );
    response = res.data;
  } catch (err) {
    error = err.response.data.error;
  }
  
  return { response, error };
}