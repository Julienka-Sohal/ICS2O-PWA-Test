// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
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
