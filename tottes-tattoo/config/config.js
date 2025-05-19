const isProduction = import.meta.env.PROD;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';
const API_PORT = import.meta.env.VITE_API_PORT || '3000';

export const API_URL = isProduction
  ? API_BASE_URL
  : `http://localhost:${API_PORT}${API_BASE_URL}`;
