function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}
