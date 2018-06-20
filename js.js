
var timer;

function loadPage() {
    timer = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("theContent").style.display = "block";
}


//function to render the Start page
function renderStart() {

    var divStart = document.getElementById("startContent");
    var divStuff = document.getElementById("stuffContent");
    var divContact = document.getElementById("contactContent");

    if (divStart.style.display === "none") {
        divStart.style.display = "block";
        divStuff.style.display = "none";
        divContact.style.display = "none";
    } else {
        divStart.style.display = "block";
    }
}

//function to render the projects page
function renderStuff() {

    var divStart = document.getElementById("startContent");
    var divStuff = document.getElementById("stuffContent");
    var divContact = document.getElementById("contactContent");

    if (divStuff.style.display === "none") {
        divStart.style.display = "none";
        divStuff.style.display = "block";
        divContact.style.display = "none";
    } else {
        divStuff.style.display = "block";
    }
}

//function to render the contact page
function renderContact() {

    var divStart = document.getElementById("startContent");
    var divStuff = document.getElementById("stuffContent");
    var divContact = document.getElementById("contactContent");

    if (divContact.style.display === "none") {
        divStart.style.display = "none";
        divStuff.style.display = "none";
        divContact.style.display = "block";
    } else {
        divContact.style.display = "block";
    }
}
