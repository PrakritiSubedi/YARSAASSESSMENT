// utils/activityLogger.js
const BASE_URL = "http://192.168.1.4/youcan/backend/api";

export async function logActivity(user_id, activity) {
  try {
    const response = await fetch(`${BASE_URL}/log_activity.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, activity }),
    });

    return await response.json();
  } catch (error) {
    console.error("Logging error:", error);
    return { success: false };
  }
}
