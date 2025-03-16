const API_AUTH_URL = "http://localhost:3000/auth/login";

document.getElementById("loginForm").addEventListener("submit", handleLogin);

async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(API_AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const result = await response.json();

    // salva token
    localStorage.setItem("accessToken", result.accessToken);

    // fa il redirect alla pagian gestonale studenti
    window.location.href = "gestionale.html";
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
  }
}
