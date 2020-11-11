/**
 * Copyright 2014 Bruce Ingalls
 * global console
 * Lists consecutive subarrays
 */
var ConsecSize = 3; //global constant

/**
 * Length of consecutive sequence, at a given position
 * @param {Array} list Ints to test
 * @param {Number} index Current position
 * @returns {Number} Length of sequence. 0 on failure
 */
function consecutiveLength(list, index) {
  "use strict";
  var count = 2, step;
  if ((index > (list.length - 2)) || (index < 0)) {
    return 0;
  }
  step = list[index+1] - list[index];
  if (Math.abs(step) !== 1) {
    return 1;
  }
  while ((++index < list.length) && (list[index+1] === list[index] + step)) {
    ++count;
  }
  return count;
}

/**
 * Lists all consecutive integer sequences
 * @param {Array} list Integers with possible sequences
 * @returns {Array} List of consecutive sequences >= ConsecSize
 */
function listConsecutives(list) {
  "use strict";
  var index = 0, subIndex, end = list.length - ConsecSize, qty, results = [];
  while (index < end) {
    qty = consecutiveLength(list, index);
    //add every sequence found
    for (subIndex = ConsecSize; subIndex <= qty; subIndex++) {
      results.push(index + (subIndex - ConsecSize));
    }
    if (qty > 1) { --qty; }
    index += qty;
  }
  return results;
}

//var list = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];
//console.log(consecutiveLength(list, 6));  //4
//console.log(listConsecutives(list));  //[0, 4, 6, 7]
