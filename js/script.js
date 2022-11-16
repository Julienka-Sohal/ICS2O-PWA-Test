// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-JS/sw.js", {
    scope: "/ICS2O-Unit5-02-JS/",
  })
}

// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 6) + 1

//process
function myButtonClicked() {
  const buttonOnChecked = document.getElementById("roll1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "You rolled for " + randomNumber + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "You rolled for -" + randomNumber + "."
  }
}
