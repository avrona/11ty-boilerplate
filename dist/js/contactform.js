const submit = document.getElementById('submitButton')
const inputFirstName = document.getElementById('inputFirstName')
const inputLastName = document.getElementById('inputLastName')
const inputEmail = document.getElementById('inputEmailField')
const iconLastName = document.getElementById('lastNameCheckIcon')
const iconFirstName = document.getElementById('firstNameCheckIcon')
const iconEmail = document.getElementById('emailCheckIcon')
const emailMessage = document.getElementById('wrongEmailMessage')
const successMessage = document.getElementById('successMessage')
const modalClose = document.getElementsByClassName('modal-close')
const MAXCHARNAMEFIELD = 20
const MINCHARNAMEFIELD = 3
var firstNameValidated = false
var lastNameValidated = false
var emailValidated = false

document.addEventListener("DOMContentLoaded", function() {
emailMessage.style = 'display:none';
successMessage.style = 'display:none';
submit.disabled = true;
submit.setAttribute("disabled","")
}
)


// EVENT LISTENERS
document.addEventListener('change', event => {   
    if (event.target.matches('.inputFirstNameField')) {
      validateFirstName()
    } else if (event.target.matches('.inputLastNameField')) {
      validateLastName()
    } else if (event.target.matches('.inputEmailField')) {
      validateEmail(event.target.value)
    } else {
      //nothing
    }
  }, false)

 document.addEventListener('DOMContentLoaded', function () {

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

});
  


// First Name validation
  function validateFirstName() {
    var regexString = /^[a-z ,.'-]+$/i; //words separated by space
   
    const iconFirstName = document.getElementById('firstNameCheckIcon')
    const conditionsFirstName =
      (inputFirstName.value.length > MINCHARNAMEFIELD) &&
      (inputFirstName.value.length < MAXCHARNAMEFIELD) &&
      (inputFirstName.value != null) &&
      (regexString.test(inputFirstName.value))  //test for regex string
    console.log(regexString.test(inputFirstName.value))

    // First Name test condition and validation
    if (conditionsFirstName) {
      // input box color
      inputFirstName.classList.remove('is-danger')
      inputFirstName.classList.add('is-success')

      // icon first name type
      iconFirstName.classList.remove('fa-exclamation-triangle')
      iconFirstName.classList.add('fa-check')
      console.log("icon :" + iconFirstName.classList.value)
   
      //now we call submit button test
      firstNameValidated = true
    } else {
      // input box color
      inputFirstName.classList.remove('is-success')
      inputFirstName.classList.add('is-danger')      
      // icon first name type
      iconFirstName.classList.remove('fa-check')
      iconFirstName.classList.add('fa-exclamation-triangle')

      firstNameValidated = false
    }
  }

  // Last Name validation
  function validateLastName() {
    var regexString = /^[a-z ,.'-]+$/i; //words separated by space
   
    const iconLastName = document.getElementById('lastNameCheckIcon')
    const conditionsLastName =
    (inputLastName.value.length > MINCHARNAMEFIELD) &&
    (inputLastName.value.length < MAXCHARNAMEFIELD) &&
    (inputLastName.value != null) &&
    (regexString.test(inputLastName.value))  //test for regex string

  // Last Name test condition and validation
    if (conditionsLastName) {
      // input box color
      inputLastName.classList.remove('is-danger')
      inputLastName.classList.add('is-success')

      // icon Last name type
      iconLastName.classList.remove('fa-exclamation-triangle')
      iconLastName.classList.add('fa-check')
      console.log("icon :" + iconLastName.classList.value)
   
      //now we call submit button test
      lastNameValidated = true

    } else {
      // input box color
      inputLastName.classList.remove('is-success')
      inputLastName.classList.add('is-danger')
      // icon last name type
      iconLastName.classList.remove('fa-check')
      iconLastName.classList.add('fa-exclamation-triangle')
   
      lastNameValidated = false
    }
    // If all validated launch SubmitCheck()
    if (lastNameValidated) {
      submitCheck()
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
    console.log(firstNameValidated, lastNameValidated, emailValidated)
    if (firstNameValidated && lastNameValidated && emailValidated) {
   
      submit.disabled = false;              //button is no longer no-clickable
      submit.removeAttribute("disabled");   //detto
    } else {
      emailMessage.style = 'display:block'  //email warning shows up
    }
  }


  function sendForm () {


    // Show the success message tab: 
    


    // Sending and receiving data in JSON format using POST method
        //
        var xhr = new XMLHttpRequest();
        // formData as a JSON
        var data = new FormData();
        data.append('zf_referrer_name','https://www.6337.fr/');
        data.append('zf_redirect_url',''); 
        data.append('SingleLine','Pas répondu');
        data.append('Name_First', toString(inputFirstName.value));
        data.append('Name_Last', toString(inputLastName.value));
        data.append('Email', toString(inputEmail.value));
        data.append('SingleLine1','');
        data.append('MultiLine','test script d\'Alex');

            
        // PHP script
        xhr.open("POST", "../test.php");

        xhr.onreadystatechange = function() { if (xhr.readyState === 4 && xhr.status === 200) { console.log(xhr.responseText);
        } }
        //xhr.setRequestHeader("Content-type", "application/json") // or "text/plain"
        xhr.send(data); 

}


