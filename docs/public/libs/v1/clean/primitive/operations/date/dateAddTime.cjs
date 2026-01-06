'use strict';

var addTime = require('../../../../date/operators/addTime.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateAddTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (primitive) => dateAddTime(primitive, time);
    }
    const [primitive, time] = args;
    return wrapValue.wrapValue(addTime.addTime(unwrap.unwrap(primitive), unwrap.unwrap(time)));
}

exports.dateAddTime = dateAddTime;
