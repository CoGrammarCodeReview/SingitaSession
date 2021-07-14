const Dropdown = require('./dropdown')
  
  function mySubmenuFunction() {
    const options = [
      "Classes",
      "Tuition",
      "Registration"
    ]
    const dropdownContent = {
      link: "/showUserOptions",
      id: "userOptions",
      hovered: false,
      options: options
    };
    const dropdown = new Dropdown(dropdownContent);
    if (x.style.display === "block") {
      dropdownContent.hovered = false
      x.style.display = "none";
    } else {
      dropdownContent.hovered = true
      x.style.display = "block";
    }
    const dropdown = new Dropdown(dropdownContent);
    const displayed = dropdown.show()
    const element = document.getElementsByClassName('dropdown-content')[0];
    element.innerHTML = displayed
  }

  function mySubmenuFunction2() {
    var x = document.getElementsByClassName('dropdown-content2')[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//Tuition Calculator JavaScript

//Declaring Const, Let, & Var

const dailyRate = 50;

let infantWeekly = 200;
let youngToddlerWeekly = 180;
let oldToddlerWeekly = 150;
let preschoolWeekly = 140;
let schoolAgeWeekly = 130;

var tuitionRateTotal = 0;
var numberOfDays = 0;
var numberOfInfants = 0;
var numberOfYoungToddlers = 0;
var numberOfOlderToddlers = 0;
var numberOfPreschoolers = 0;
var numberOfSchoolAge = 0;



//Pre-setting the Tuition Calculator

document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;

document.getElementById("numberOfDays").innerHTML = numberOfDays;

document.getElementById("numberOfInfants").innerHTML = numberOfInfants;

document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;

document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;

document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;

document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;



//Declaring Functions for Daily Rates

function addDailyRate() {
  tuitionRateTotal += dailyRate;
  numberOfDays += 1;
  document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
  document.getElementById("numberOfDays").innerHTML = numberOfDays;
}

function minusDailyRate() {
    tuitionRateTotal -= dailyRate;
    numberOfDays -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfDays").innerHTML = numberOfDays;
}



//Declaring Functions for Infant Tuition Rates

function addInfantWeekly() {
    tuitionRateTotal += infantWeekly;
    numberOfInfants += 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfInfants").innerHTML = numberOfInfants;
}

  function minusInfantWeekly() {
    tuitionRateTotal -= infantWeekly;
    numberOfInfants -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfInfants").innerHTML = numberOfInfants;
}



//Declaring Functions for Young Toddlers Tuition Rates

function addYoungToddlerWeekly() {
    tuitionRateTotal += youngToddlerWeekly;
    numberOfYoungToddlers += 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;
}

  function minusYoungToddlerWeekly() {
    tuitionRateTotal -= youngToddlerWeekly;
    numberOfYoungToddlers -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;
}



//Declaring Functions for Older Toddlers Tuition Rates

function addOldToddlerWeekly() {
    tuitionRateTotal += oldToddlerWeekly;
    numberOfOlderToddlers += 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;
}

function minusOldToddlerWeekly() {
    tuitionRateTotal -= oldToddlerWeekly;
    numberOfOlderToddlers -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;
}



//Declaring Functions for Preschoolers Tuition Rates

function addPreschoolWeekly() {
    tuitionRateTotal += preschoolWeekly;
    numberOfPreschoolers += 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;
}

function minusPreschoolWeekly() {
    tuitionRateTotal -= preschoolWeekly;
    numberOfPreschoolers -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;
}



//Declaring Functions for School-aged Tuition Rates

function addSchoolAgeWeekly() {
    tuitionRateTotal += schoolAgeWeekly;
    numberOfSchoolAge += 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;
}

function minusSchoolAgeWeekly() {
    tuitionRateTotal -= schoolAgeWeekly;
    numberOfSchoolAge -= 1;
    document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
    document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;
}



//Declaring Function to 

function printClicks() {
  document.getElementById("outputCalc").innerHTML = "R" + tuitionRateTotal;
}