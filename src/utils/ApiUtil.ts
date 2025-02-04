// src/utils/ApiUtil.ts

const API_URL = "https://gorest.co.in/public/v2/users";
const API_TOKEN = "be65c1c7dbb1af760b8a450dd6875873b8a93e9a6af1dea2570b0880abf1cd13";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_TOKEN}`,
};

export const apiRequest = async (endpoint: string, method = "GET", body?: any) => {
  try {
    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetchUsers = () => apiRequest("", "GET");
export const deleteUser = (id: number) => apiRequest(`/${id}`, "DELETE");
