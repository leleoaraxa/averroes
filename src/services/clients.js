import { apiConfig } from "./api-config.js"

export async function getClients({ id }) {
  const url = `${apiConfig.baseURL}/clients/${id}`;

  const response = await fetch(url)
  const data = await response.json();

  return data;
}