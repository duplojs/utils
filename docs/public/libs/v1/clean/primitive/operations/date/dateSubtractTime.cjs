'use strict';

var subtractTime = require('../../../../date/operators/subtractTime.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateSubtractTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (primitive) => dateSubtractTime(primitive, time);
    }
    const [primitive, time] = args;
    return wrapValue.wrapValue(subtractTime.subtractTime(unwrap.unwrap(primitive), unwrap.unwrap(time)));
}

exports.dateSubtractTime = dateSubtractTime;
