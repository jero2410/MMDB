import type { LoginResponse, SigninData, SignupData } from "../types/auth.type";

const API_URL = "http://localhost:3000";

export async function signup(data: SignupData) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    const message = Array.isArray(result.message)
      ? result.message.join(", ")
      : result.message;

    throw new Error(message || "Signup failed");
  }

  return result;
}

export async function login(data: SigninData): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    const message = Array.isArray(result.message)
      ? result.message.join(", ")
      : result.message;

    throw new Error(message || "Login failed");
  }

  return result;
}
