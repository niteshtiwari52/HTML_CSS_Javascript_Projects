// Refactored code

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input Error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");

  small.innerText = message;
};

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const checkEmail = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not Valid`);
  }
};

const getFieldName = (input) => {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
};
const checkRequiredField = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at last ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

// check password
const checkPassword = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, `Password do not match`);
  }
};

// Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequiredField([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkEmail(email);
  checkLength(password, 6, 25);
  checkPassword(password, password2);
});

// simple code
// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// // show input Error message
// const showError = (input, message) => {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// };

// // Show success outline
// const showSuccess = (input) => {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// };

// // Check email is valid
// const isValidEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// // Event Listener
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (username.value === "") {
//     showError(username, "Username is Required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is Required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is Required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Confirm Password is Required");
//   } else {
//     showSuccess(password2);
//   }
// });
