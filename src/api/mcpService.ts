import axios from 'axios';
import { MCP_ENDPOINT } from '@env';

export const fetchData = async () => {
  const response = await axios.get(`${MCP_ENDPOINT}/your-api-route`);
  return response.data;
};




