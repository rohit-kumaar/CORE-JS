let employees = {
  emp_name: "rohit@gmail.com",
  emp_password: "qwerty",
};

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

email.addEventListener("blur", enterEmail);
password.addEventListener("blur", enterPassword);
submit.addEventListener("click", submitForm);

function enterEmail() {
  let emailId = email.value;
  if (emailId == employees.emp_name) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
}

function enterPassword() {
  let passwordValue = password.value;
  if (passwordValue == employees.emp_password) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }
}

function submitForm(error) {
  error.preventDefault();
  let success = document.getElementById("success");
  let inCompleteForm = document.getElementById("inCompleteForm");
  let emailId = email.value;
  let passwordValue = password.value;
  if (
    emailId == employees.emp_name &&
    passwordValue == employees.emp_password
  ) {
    success.classList.add("show");
    console.log("valid");
  } else {
    console.log("Invalid");
    success.classList.add("d-none");
    inCompleteForm.classList.remove("d-none");
    inCompleteForm.classList.add("d-block");
    inCompleteForm.classList.add("show");
  }
  setTimeout(() => {
    success.classList.remove("show");
  }, 5000);
}
