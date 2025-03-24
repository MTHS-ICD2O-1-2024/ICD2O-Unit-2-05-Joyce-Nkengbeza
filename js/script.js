// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfTriangle() {
  // input
  const baselength = parseInt(document.getElementById('base-length').value)
  const heightlength = parseInt(document.getElementById('height-length').value)

  // process
    const areaOfTriangle = (baselength * heightlength) /2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}

