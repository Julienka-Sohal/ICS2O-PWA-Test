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
  const buttonOnChecked = document.getElementById("ageInput").value

  if (buttonOnChecked >= 17) {
    document.getElementById("movie-maturity-recommendation").innerHTML =
      "You are old enough to watch an R rated movie, PG-14 movies and G rated movies if you wish!"
  } else if (buttonOnChecked >= 13) {
    document.getElementById("movie-maturity-recommendation").innerHTML =
      "You are old enough to watch a PG-13 movie! However not an R rated movie yet..."
  } else if (buttonOnChecked >= 4) {
    document.getElementById("movie-maturity-recommendation").innerHTML =
      "You are old enough to watch a G rated movie! However not an PG-13 movies or R rated movies..."
  } else {
    document.getElementById("movie-maturity-recommendation").innerHTML =
      "You shouldn't be watching movies at all!"
  }
}
