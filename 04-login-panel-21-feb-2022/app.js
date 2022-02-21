const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");

email.addEventListener("blur", enterEmail);
phone.addEventListener("blur", enterPhoneNumber);
submit.addEventListener("click", submitForm);

function enterEmail() {
  const reg = /^([0-9a-zA-Z]+)\@([0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
  let emailStr = email.value;
  console.log(emailStr);
  if (reg.test(emailStr)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
}

function enterPhoneNumber() {
  const reg = /^([0-9]){10}$/;
  let number = phone.value;
  console.log(number);
  if (reg.test(number)) {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  } else {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  }
}

function submitForm(error) {
  error.preventDefault();
  let success = document.getElementById("success");
  let emailStr = email.value;
  if (emailStr.length > 0) {
    success.classList.add("show");
  }
  setTimeout(() => {
    success.classList.remove("show");
  }, 5000);
}
