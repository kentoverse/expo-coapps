import axios from 'axios';
import { MCP_ENDPOINT } from '@env';

// Example fetch function with credentials
export const fetchData = async () => {
  const response = await axios.get(`${MCP_ENDPOINT}/echo?message=hello`, {
    withCredentials: true, // ✅ Allow cookies/auth headers
  });
  return response.data;
};