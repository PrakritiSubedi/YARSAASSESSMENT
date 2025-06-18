// utils/auth.js
const BASE_URL = "http://192.168.1.4/thatsmygirl/backend/api";

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/login.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Network error" };
  }
}
