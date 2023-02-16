"use strict";
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

//console.log(MyMath)

const result = MyMath.sum(4, 8);
console.log("result = ", result);

const component1 = new Component();
component1.render();
