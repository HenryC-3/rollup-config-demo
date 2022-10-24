'use strict';

function sayHi() {
    console.log("hi");
}

function lazyLoading() {
    Promise.resolve().then(function () { return require('./utlis-d14fe9e2.js'); }).then(({ sayWord }) => {
        sayWord();
    });
}

exports.lazyLoading = lazyLoading;
exports.sayHi = sayHi;
