'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const resultKind = kind.createEitherKind("result");
function result(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (value) => result(information, value);
    }
    const [information, value] = args;
    return resultKind.setTo(create.right(information, value));
}

exports.result = result;
exports.resultKind = resultKind;
