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
  navigator.serviceWorker.register("/ICS2O-Unit5-01-JS/sw.js", {
    scope: "/ICS2O-Unit5-01-JS/",
  })
}

// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates slader value
 */
function updatesSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  //process
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " You got it! good job"
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " Nice guess, but try again"
  }
}
