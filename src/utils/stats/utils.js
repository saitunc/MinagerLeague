"use strict";
exports.__esModule = true;
exports.gaussianRandom = void 0;
function gaussianRandom(mean, stdev, roundhalf) {
    var u = 1 - Math.random();
    var v = Math.random();
    var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    //z distribution
    if (roundhalf == false) {
        return z * stdev + mean;
    }
    else {
        //0.5, 0.0 rounder
        return (Math.round((z * stdev + mean) * 2) / 2);
    }
}
exports.gaussianRandom = gaussianRandom;
