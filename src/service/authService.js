const API_BASE_URL = "http://localhost:8080/auth";

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { message: text };
  }
  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
};

export const registerUser = async (data) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || "Registration failed");
  }
  return JSON.parse(text);
};