'use strict';

var test = require('../../string/test.cjs');

const isAbsoluteRegex = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function isAbsolute(path) {
    return test.test(path, isAbsoluteRegex);
}

exports.isAbsolute = isAbsolute;
