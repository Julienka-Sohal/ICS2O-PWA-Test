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

//process
function myButtonClicked() {
  const ageCheckedOne = document.getElementById("age1").checked
  const ageCheckedTwo = document.getElementById("age2").checked


  if (ageCheckedOne == true) {
    document.getElementById("radio-button-value").innerHTML =
      "You are old enough to watch an R rated movie"
  } else if (ageCheckedTwo) {
    document.getElementById("radio-button-value").innerHTML =
      "You are old enough to watch a PG-13 mocie"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "You are old enough to watch a G rated movie"
  }
}
