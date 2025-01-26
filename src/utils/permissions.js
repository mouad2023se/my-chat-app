async function permissions(userId, operation, key) {
    try {
      const response = await fetch(
        "http://127.0.0.1:4000//my-chat-app-662c8/us-central1/checkPermission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { userId, operation, key } }),
        }
      );
  
      const result = await response.json();
      return result.result;
    } catch (error) {
      console.error("Error checking user permissions:", error);
      throw new Error("Failed to check user permissions. Please try again.");
    }
  }
  
  export default permissions;