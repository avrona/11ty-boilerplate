const submit = document.getElementById('submitButton')
const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmailField')
const iconName = document.getElementById('nameCheckIcon')
const iconEmail = document.getElementById('emailCheckIcon')
const emailMessage = document.getElementById('wrongEmailMessage')
const MAXCHARNAMEFIELD = 20
const MINCHARNAMEFIELD = 3
var nameValidated = false
var emailValidated = false

document.addEventListener("DOMContentLoaded", function() {
emailMessage.style = 'display:none'
}
)


// EVENT LISTENERS
document.addEventListener('change', event => {   
    if (event.target.matches('.inputNameField')) {
      validateName()
    } else if (event.target.matches('.inputEmailField')) {
      validateEmail(event.target.value)
    } else {
      //nothing
    }
  }, false)


// Name validation
  function validateName() {
    var regexString = /^[a-z ,.'-]+$/i; //words separated by space
   
    const iconName = document.getElementById('nameCheckIcon')
    const conditions =
      (inputName.value.length > MINCHARNAMEFIELD) &&
      (inputName.value.length < MAXCHARNAMEFIELD) &&
      (inputName.value != null) &&
      (regexString.test(inputName.value))  //test for regex string
    console.log(regexString.test(inputName.value))
   
    if (conditions) {
      // input box color
      inputName.classList.remove('is-danger')
      inputName.classList.add('is-success')
      // icon type
      iconName.classList.remove('fa-exclamation-triangle')
      iconName.classList.add('fa-check')
      console.log("icon :" + iconName.classList.value)
   
      //now we call submit button test
      nameValidated = true
      submitCheck()
    } else {
      // input box color
      inputName.classList.remove('is-sucess')
      inputName.classList.add('is-danger')
      // icon type
      iconName.classList.remove('fa-check')
      iconName.classList.add('fa-exclamation-triangle')
   
      nameValidated = false
    }
  }

// Validate email
  function validateEmail(value) {
    const iconEmail = document.getElementById('emailCheckIcon')
   
    if (validateRegexString(value)) {
      // input box color
      inputEmail.classList.remove('is-danger')
      inputEmail.classList.add('is-success')
      // icon type
      iconEmail.classList.remove('fa-exclamation-triangle')
      iconEmail.classList.add('fa-check')
      emailMessage.style  = 'display:none'
   
      emailValidated = true
      submitCheck()
    } else {
      // input box color
      inputEmail.classList.remove('is-sucess')
      inputEmail.classList.add('is-danger')
      // icon type
      iconEmail.classList.remove('fa-check')
      iconEmail.classList.add('fa-exclamation-triangle')
      emailMessage.style = 'display:block'
   
      emailValidated = false
    }
  }
  

  function validateRegexString(email) {
    const regexString = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regexString.test(String(email).toLowerCase()) // true|false
  }


  function submitCheck() {
    console.log(nameValidated, emailValidated)
    if (nameValidated && emailValidated) {
   
      submit.disabled = false;              //button is no longer no-clickable
      submit.removeAttribute("disabled");   //detto
    } else {
      emailParagraph.style = 'display:block'  //email warning shows up
    }
  }