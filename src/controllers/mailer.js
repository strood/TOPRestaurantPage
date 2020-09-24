"use strict";

// const nodemailer = require("nodemailer");

const sendEmail = (input) => {
  for (var i = 0; i < input.length; i++) {

    console.log(input.item(i).value.length);
  }

}

// Check that all input valid before sending email
const validateInput = (input) => {
  if (validName(input.item(0)) &&
      validEmail(input.item(1)) &&
      validMessage(input.item(2))) {
    return true;
  } else {
    return false;
  }
}

// Private validation methods used above
const validName = (name) => {
  return name.value.length > 0 ? true : false;
}
const validEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.value).toLowerCase());
}
const validMessage = (message) => {
  return message.value.length <= 200 ? true : false;
}

export {
  sendEmail,
  validateInput,
}
