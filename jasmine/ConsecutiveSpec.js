/**
 * Copyright 2014 Bruce Ingalls
 * global consecutiveLength, describe, expect, it
 * Jasmine tests for listConsecutives
 */
describe("Consecutive", function() {
  "use strict";
  var list = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];

  it("should be able to count a consecutiveLength", function() {
    expect(consecutiveLength(list, 6)).toEqual(4);
  });


  it("should be able to listConsecutives", function() {
    expect(listConsecutives(list)).toEqual([0, 4, 6, 7]);
  });
});