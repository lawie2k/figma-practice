const showSignupButton = document.getElementById("signup-btn-signup");
const showLoginButton = document.getElementById("login-btn-signup");
const LoginForm = document.getElementById("form-login");
const SignupForm = document.getElementById("form-signup");

showLoginButton.addEventListener("click", function () {
  SignupForm.style.display = "none";
  LoginForm.style.display = "block";
});

const backToSignupButton = document.getElementById("signup-btn-login");
backToSignupButton.addEventListener("click", function () {
  LoginForm.style.display = "none";
  SignupForm.style.display = "block";
});
