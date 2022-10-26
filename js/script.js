// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-3-01/sw.js", {
    scope: "/ICS2OR-Unit-3-01/",
  })
}

/**
 * This function displays an alert.
 */
function calculate() {
  const baseA = parseFloat(document.getElementById("base-a").value)
  const baseB = parseFloat(document.getElementById("base-b").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const area = [(baseA + baseB) / 2] * height

  // output
  document.getElementById("area").innerHTML =
    "The area is:" + area.toFixed(2)
}