"use strict";

const email = document.getElementById("email");
const errIcon = document.getElementById("error");
const errMessage = document.getElementById("error-message");
// const errMessage = document.getElementById("error-message").st;
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let regx = /^([a-zA-Z0-9\._&$]+)@([a-zA-Z0-9]+.)([a-z]+)?$/;

  if (!regx.test(email.value)) {
    errIcon.classList.remove("hide");
    errMessage.classList.remove("hide");
  }

  setTimeout(function () {
    errIcon.classList.add("hide");
    errMessage.classList.add("hide");
  }, 2000);
});
