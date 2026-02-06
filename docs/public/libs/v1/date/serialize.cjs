'use strict';

var theDate = require('./theDate.cjs');

function serialize(input) {
    if (input instanceof theDate.TheDate) {
        const timestamp = input.getTime();
        return `date${Math.abs(timestamp)}${timestamp > 0 ? "+" : "-"}`;
    }
    const number = input.toNative();
    return `time${Math.abs(number)}${number > 0 ? "+" : "-"}`;
}

exports.serialize = serialize;
