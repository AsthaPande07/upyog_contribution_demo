// src/services/api.js
// src/services/api.js
import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com';

export const getFacilities = async () => {
  try {
    const response = await axios.get(`${API_URL}/facilities`);
    return response.data;
  } catch (error) {
    console.error('Error fetching facilities:', error);
    throw error;
  }
};

export const bookFacility = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/book`, data);
    return response.data;
  } catch (error) {
    console.error('Error booking facility:', error);
    throw error;
  }
};
