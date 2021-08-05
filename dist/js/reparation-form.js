
// ------------------  Form selection functions ------------------------------
//------------------------------------------------------------------
var currentTab = 0; // Current tab is set to be the first tab (0)
document.addEventListener('DOMContentLoaded', function() {
showTab(currentTab); // Display the current tab
}, false);


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
            //nextPrev(1);
            showEstimate();
                // Store clicked button value
                valuesform.problem = event.target.innerHTML ;
                valuesform.idproblem = event.target.id ;
                console.log("résultat: " + valuesform.idmodel + valuesform.idscreen + valuesform.idyear + valuesform.idproblem);

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
    var tab = document.getElementById("step6");
    var formbtn1 = document.getElementById("resetBtn");

    // Hide the current tab:
    x[currentTab].style.display = "none";
    formbtn1.style.display = "none";
    // Show the results tab: 
    tab.style.display = "inline";

    // Calculate the sum
    var total = estimate();
    document.getElementById("amount").innerHTML = (total + "€ TTC");

    // Modify the content accordingly
    document.getElementById("mactitle").innerHTML = (valuesform.model);
    document.getElementById("macsubtitle").innerHTML = ("Ecran " + valuesform.screen + " - Année " + valuesform.year);

}





function sendEstimate(){
   // Sending and receiving data in JSON format using POST method
        //
        var xhr = new XMLHttpRequest();
        // formData
        var formData = new FormData();
            formData.append("zf_referrer_name:", "https://www.6337.fr/");
            formData.append("zf_redirect_url", ""); 
            formData.append("zc_gad", "");
            formData.append("Dropdown", valuesform.model);
            formData.append("Dropdown4", valuesform.screen);
            formData.append("Dropdown5", valuesform.year);
            formData.append("Dropdown1", valuesform.problem);
            formData.append("Dropdown2", "d'une réparation ratée");

        // TEST zoho forms
        var formendpoint = "https://forms.zohopublic.eu/6337crm/form/TESTUndevisen3clics/formperma/tKHAtARvKUQ-8vW_LMK8Lw4gzmaVTvm00S-DsYVqAK8/htmlRecords/submit"
        xhr.open("POST", formendpoint);

        //Envoie les informations du header adaptées avec la requête
        //xhr.setRequestHeader("Content-Type", "multipart/form-data");

        xhr.send(formData);
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
   

/*
function filterSelection(argument1, argument2) {
    var x, i;
    x = document.getElementsByClassName("button");
    
    for (i = 0; i < x.length; i++) {
        // element.style.display = "none";
        if (x[i].className.indexOf(argument1) > -1) {
            for (j = 0; j < x.length; j++){
                if (x[j].className.indexOf(argument2) > -1) {
                    x[j].style.display = "block";
                    console.log("j" + x[j]);
                } else { 
                    x[i].style.display = "display";
                    console.log("i" + x[i]);
                        }
            }
        }
    }
}
*/
      

      

    /*
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
*/

/*
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
*/




