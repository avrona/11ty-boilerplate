


// ------------------  Form selection functions ------------------------------
//------------------------------------------------------------------
const modalForm = document.getElementById('modalform');
var rootEl = document.documentElement;
var currentTab = 0; // Current tab is set to be the first tab (0)
document.addEventListener('DOMContentLoaded', function() {
showTab(currentTab); // Display the current tab
}, false);


// -------------------- Variables for the Mac problem steps ---------------//
let valuesform = {
    model:"",
    idmodel: "",
    year:"",
    idyear:"",
    screen:"",
    idscreen:"",
    problem:"",
    idproblem:""
}

// -------------------- Variables for the customer details and form validation step ---------------//
const submit = document.getElementById('submitButton')
const inputFirstName = document.getElementById('inputFirstName')
const inputLastName = document.getElementById('inputLastName')
const inputEmail = document.getElementById('inputEmailField')
const inputSubject = document.getElementById('inputSubjectField')
const inputMessage = document.getElementById('inputMessageField')
const iconLastName = document.getElementById('lastNameCheckIcon')
const iconFirstName = document.getElementById('firstNameCheckIcon')
const iconEmail = document.getElementById('emailCheckIcon')
const emailMessage = document.getElementById('wrongEmailMessage')
//const successMessage = document.getElementById('successMessage')
const modalClose = document.getElementsByClassName('modal-close')
const MAXCHARNAMEFIELD = 20
const MINCHARNAMEFIELD = 3
var firstNameValidated = false
var lastNameValidated = false
var emailValidated = false

document.addEventListener("DOMContentLoaded", function() {
emailMessage.style = 'display:none';
// successMessage.style = 'display:none';
submit.disabled = true;
submit.setAttribute("disabled","")
}
)

// EVENT LISTENERS for the Customer details step (name, email)
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

// Listen to buttons on STEP 1 and act accordingly (Model)
document.addEventListener("DOMContentLoaded", function(){
    let stepone = document.getElementById('step1');
    let buttons = stepone.querySelectorAll(".button").length;

    for (var i = 0; i < buttons ; i++) {
        stepone.querySelectorAll(".button")[i].addEventListener("click", (event)=> {
            console.log("click:" + event.target.id);
                // Store clicked button value
                valuesform.model = event.target.innerHTML;
                valuesform.idmodel = event.target.id;
            // Switch between each case and next step
            switch (event.target.id) {
                // MacBook Air
                case "mba":
                    nextPrev(2);
                    // Hide buttons not matching mba
                    filterSelection("button-screen","mba","");
                    break
                //MacBook Pro
                case "mbp":
                    nextPrev(1);  
                    console.log('mbp clicked');
                    console.log(valuesform.idmodel); 
                    // Hide buttons not matching mbp
                    filterSelection("button-model-pro","mbp","");
                    break
                // MacBook
                case "mb":
                    alert ("Macbook");
                    break
                // iMac
                case "imac":
                    alert ("imac");
                    break
                // MacMini
                case "macmini":
                    alert ("macmini");
                    break
                // Autre
                case "autre":
                    alert ("macmini");
                    break
            }
    // A ajouter --> Rappel des boutons précédemment cliqués (beadcrumb ou autre)
        });
    }
});
  




// Listen to buttons on STEP 2 and act accordingly (model MBP)
document.addEventListener("DOMContentLoaded", function(){
    let steptwo = document.getElementById('step2');
    //let stepthree = document.getElementById('step3'); 
    let buttons = steptwo.querySelectorAll(".button").length;

    for (var i = 0; i < buttons ; i++) {
        steptwo.querySelectorAll(".button")[i].addEventListener("click", (event)=> {
            console.log("click:" + event.target.id);
                nextPrev(1);
                // Store clicked button value
                valuesform.model = event.target.innerHTML;
                valuesform.idmodel = event.target.id;
                // Hide buttons not matching mba
                filterSelection("button-screen",valuesform.idmodel,"");   

    // A ajouter --> Rappel des boutons précédemment cliqués (beadcrumb ou autre)
        });
    }
});


// Listen to buttons on STEP 3 and act accordingly (Ecran)
document.addEventListener("DOMContentLoaded", function(){
    let stepthree = document.getElementById('step3'); 
    let buttons = stepthree.querySelectorAll(".button").length;

    for (var i = 0; i < buttons ; i++) {
        stepthree.querySelectorAll(".button")[i].addEventListener("click", (event)=> {
            console.log("click:" + event.target.id);
                 // Store clicked button value
                valuesform.screen = event.target.innerHTML;
                valuesform.idscreen = event.target.id ;
                nextPrev(1);
                 // Hide buttons not matching idscreen
                 filterSelection("button-year",valuesform.idmodel,valuesform.idscreen);

    // A ajouter --> Rappel des boutons précédemment cliqués (beadcrumb ou autre)
        });
    }
});



// Listen to buttons on STEP 4 and act accordingly (Année)
document.addEventListener("DOMContentLoaded", function(){
    let stepfour = document.getElementById('step4'); 
    let buttons = stepfour.querySelectorAll(".button").length;

    for (var i = 0; i < buttons ; i++) {
        stepfour.querySelectorAll(".button")[i].addEventListener("click", (event)=> {
            console.log("click:" + event.target.id);
                nextPrev(1);
                // Store clicked button value
                valuesform.year = event.target.innerHTML;
                valuesform.idyear = event.target.id ; 

    // A ajouter --> Rappel des boutons précédemment cliqués (beadcrumb ou autre)
        });
    }
});



// Listen to buttons on STEP 5 and act accordingly (Problème)
document.addEventListener("DOMContentLoaded", function(){
    let stepfive = document.getElementById('step5'); 
    let buttons = stepfive.querySelectorAll(".button");

    for (var i = 0; i < buttons.length ; i++) {
        let button = buttons[i];
        button.addEventListener("click", (event)=> {
            console.log("click:" + event.target.id);
            console.log("contenu:" + event.target.innerHTML);
            console.log("target:" + event.target);
            console.log("button:" + button.id);
            
                // Store clicked button value
                valuesform.problem = event.target.innerHTML ;
                valuesform.idproblem = event.target.id ;
                console.log("résultat: " + valuesform.idmodel + valuesform.idscreen + valuesform.idyear + valuesform.idproblem);
                showEstimate();

    // A ajouter --> Rappel des boutons précédemment cliqués (beadcrumb ou autre)
        });
    }
});




function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("buttontab");
    for (let i = 0 ; i < x.length; i++){
    x[i].style.display = "none";
    }
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("resetBtn").style.display = "none";
    } else {
      document.getElementById("resetBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      // document.getElementById("estimateBtn").style.display = "inline";
    } else {
     // document.getElementById("estimateBtn").style.display = "none";
    }
    // ... and run a function that displays the correct step indicator:
   
  }
  



function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("buttontab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the last step :
  if (currentTab >= x.length) {
    //...the estimate button is displayed:
    // document.getElementById("estimateBtn").style.display = "inline";
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}


function formReset() {
    // Reset stored values
    valuesform = {
        model:"",
        idmodel: "",
        year:"",
        idyear:"",
        screen:"",
        idscreen:"",
        problem:"",
        idproblem:""
    }
    var tab = document.getElementById("estimatetab");
    tab.style.display = "none"; // Hide estimate tab
    modalForm.classList.remove('is-active'); // Hide Modal, show form
    rootEl.classList.remove('is-clipped'); // Allow site scrolling
    currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab
}


function estimate() {
    let sum = 0 ;
    switch (valuesform.idmodel) {
        case "mbpu":
            sum = sum + 220 ;
        if (valuesform.idscreen == "15p" || valuesform.idscreen == "17p" ) {
            sum = sum + 30 ;
        } else {} ;
        break

        case "mbpr":
            sum = sum + 280;
        if (valuesform.idscreen == "15p" ) {
            sum = sum + 40 ;
        } else {} ;
        break

        case "mbptb":
            sum = sum + 450;
        break

        case "mba":
            sum = sum + 220;
            switch (valuesform.idyear) {
                case "2012" :
                case "2013" :
                case "2014" :
                    sum = sum + 60;
                break;
                case "2015" :
                case "2016" :
                case "2017" :
                    sum = sum + 100;
                break;

                case "2018" :
                case "2019" :
                    sum = sum + 230;
                default:
                break;
            }
        break
    }
return sum ;}


function showEstimate () {
    var x = document.getElementsByClassName("buttontab");
    var tab = document.getElementById("estimatetab");
    var formbtn1 = document.getElementById("resetBtn");
    //var formbtn2 = document.getElementById("estimateBtn");

    // Hide the current tab:
    x[currentTab].style.display = "none";
    formbtn1.style.display = "none";
    //formbtn2.style.display = "none";
    // Show the results tab: 
    tab.style.display = "inline";

    // Calculate the sum
    var total = estimate();
    document.getElementById("amount").innerHTML = (total + "€ TTC");

    // Modify the content accordingly
    document.getElementById("mactitle").innerHTML = (valuesform.model);
    document.getElementById("macsubtitle").innerHTML = ("Ecran " + valuesform.screen + " - Année " + valuesform.year);
}



function validateForm() {
    return true ;}



function filterSelection(buttontype, argument1, argument2) {
    var x, i;
    x = document.getElementsByClassName(buttontype);
    if ( argument2 == "" ) {
        for (i = 0; i < x.length; i++) {
            // element.style.display = "none";
            if (x[i].className.indexOf(argument1) > -1) {
                x[i].style.display = "block";
                //console.log("i" + x[i].classList);
                } else {
                    x[i].style.display = "none";
                    } 
                }
        } else {
            for (i = 0; i < x.length; i++) {
                if (x[i].className.indexOf(argument1) > -1 && x[i].className.indexOf(argument2) > -1 ) {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }
}
   
// First Name validation
function validateFirstName() {
  var regexString = /^[a-z ,.' À-ž-]+$/i; //words separated by space with accents or some signs.
 
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
  var regexString = /^[a-z ,.' À-ž-]+$/i; //words separated by space with accents or some signs
 
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



function showModalForm(){

  // Calculate the sum
  var total = estimate();
  // Fill in modal form values
  document.getElementById("modalamount").innerHTML = (total + "€ TTC");
  document.getElementById("modalmactitle").innerHTML = (valuesform.model);
  document.getElementById("modalmacsubtitle").innerHTML = ("Ecran " + valuesform.screen + " - Année " + valuesform.year);
  // Show the form modal
  modalForm.classList.add('is-active');
  rootEl.classList.add('is-clipped');
  const exits = modalForm.querySelectorAll('.modal-exit');
  exits.forEach(function(exit) {
    exit.addEventListener('click', function(event) {
      event.preventDefault();
      modalForm.classList.remove('is-active');
      rootEl.classList.remove('is-clipped');
    });
  });
}

function modalFormReset(){
  modalForm.classList.remove('is-active');
  rootEl.classList.remove('is-clipped');
  formReset()
}

function sendEstimate(){

  // Show the success message modal
   
  successMessage.classList.add('is-active');
  const exits = successMessage.querySelectorAll('.modal-exit');
  exits.forEach(function(exit) {
    exit.addEventListener('click', function(event) {
      event.preventDefault();
      successMessage.classList.remove('is-active');
      location.reload();
    });
  });

 // Sending and receiving data in JSON format using POST method
      //
      var xhr = new XMLHttpRequest();
      // formData
      var formData = {
          zf_referrer_name: "https://www.6337.fr/",
          zf_redirect_url: "", 
          zc_gad: "",
          Dropdown: valuesform.model,
          Dropdown9: valuesform.screen,
          Dropdown1: valuesform.year,
          Dropdown3: valuesform.problem,
          Dropdown2: 'autre',
          MultiLine: inputMessage.value,
          Name_Last: inputLastName.value,
          Name_First: inputFirstName.value,
          Email: inputEmail.value,
          PhoneNumber_countrycode: '000000000',
          TermsConditions: 'on'
      }



      // PHP script
      xhr.open("POST", "../zformspost/prise-en-charge.php");

      xhr.onreadystatechange = function() { if (xhr.readyState === 4 && xhr.status === 200) { console.log(xhr.responseText);
      } }
      // xhr.setRequestHeader("Content-type", "application/json") // or "text/plain"
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(new URLSearchParams(formData).toString()); 
}

function validateForm() {
  return true ;}

// ------------------  testimonial carousel functions ------------------------------
//------------------------------------------------------------------


var slideshow = document.querySelector('.slide-wrap');

if (slideshow != null ) { //make sure we don't run this script if the slideshow is not present

  var slides = document.querySelectorAll('.slide-entry'),
slideCount = slides.length,
currentSlide = 0,
slideHeight = null,
initialHeight = slides[0].clientHeight;

slides[0].classList.add('active'); //on load, activate the first slide

function moveToSlide(n) { // set up our slide navigation functionality
  slides[currentSlide].className = 'slide-entry';
  currentSlide = (n+slideCount)%slideCount;
  slides[currentSlide].className = 'slide-entry active';
  slideHeight = slides[currentSlide].clientHeight;
  slideshow.style.height = slideHeight + 'px';
  window.addEventListener('resize', function(){
    resizedSlideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = resizedSlideHeight + 'px';
  });
}

function nextSlide(e){
  moveToSlide(currentSlide+1);
  var code = e.keyCode;
  if( code == 39 ) {
    moveToSlide(currentSlide+1);
  }
};
function prevSlide(e){
  moveToSlide(currentSlide+-1);
  var code = e.keyCode;
  if( code == 37 ) {
    moveToSlide(currentSlide+-1);
  }
};

var slideHandlers = {
  nextSlide: function(element){
    document.querySelector(element).addEventListener('click',nextSlide);
    document.body.addEventListener('keydown',nextSlide, false);
  },
  prevSlide: function(element){
    document.querySelector(element).addEventListener('click',prevSlide);
    document.body.addEventListener('keydown',prevSlide, false);
  }
}

slideHandlers.nextSlide('#next-slide');
slideHandlers.prevSlide('#prev-slide');

// Dynamic slideshow height

  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

window.addEventListener('resize', function(){ // adjust the height of the slidehow as the browser is resized
  var resizedHeight = slides[0].clientHeight;
  slideshow.style.height = resizedHeight + 'px';
});

// Detect swipe events for touch devices, credit to Kirupa @ https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
var initialX = null;
var initialY = null;
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
// swiped left
moveToSlide(currentSlide+1);
} else {
// swiped right
moveToSlide(currentSlide+-1);
}
}
initialX = null;
initialY = null;
e.preventDefault();
};

slideshow.addEventListener("touchstart", startTouch, false);
slideshow.addEventListener("touchmove", moveTouch, false);  

/*
// optional autoplay function  
  setInterval(function(){
    nextSlide();
  },8000); 
*/
} //end slideshow


// ------------------  Accordeon slider for FAQ page (depends on bulma-accordion.min.js) ------------------------------
//------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
	let cardHeaders = document.getElementsByClassName('card-header');
  let cardIcons = document.getElementsByClassName('icon-toggle');
	for (let i = 0; i < cardHeaders.length; i++) {
		cardHeaders[i].addEventListener('click', e => {
			e.currentTarget.parentElement.childNodes[3].classList.toggle('is-hidden');
      cardIcons[i].classList.toggle('fa-angle-down');
      cardIcons[i].classList.toggle('fa-angle-right');
      //console.log(e.currentTarget.parentElement.childNodes);
		});
	}
});


