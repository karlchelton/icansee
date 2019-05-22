$(document).ready(function() {

  // Simple way of managing swapping between the register and login forms
  // First declare variables for ease of use
  var registerForm = $('#register-form'),
      loginForm = $('#login-form'),
      registerBtn = $('#register-btn'),
      loginBtn = $('#login-btn');

  // On register click, hide login and show register
  registerBtn.click(function() {
    loginForm.hide(340);
    registerForm.show(340);
  });

  // On login click, hide register and show login
  loginBtn.click(function() {
    registerForm.hide(340);
    loginForm.show(340);
  });

});
