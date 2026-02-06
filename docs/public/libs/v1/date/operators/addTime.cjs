'use strict';

var isSerializedTheTime = require('../isSerializedTheTime.cjs');
var theDate = require('../theDate.cjs');
var theTime = require('../theTime.cjs');
var toTimestamp = require('../toTimestamp.cjs');
var toTimeValue = require('../toTimeValue.cjs');

function addTime(...args) {
    if (args.length === 1) {
        const [time] = args;
        return (input) => addTime(input, time);
    }
    const [input, time] = args;
    const timeValue = toTimeValue.toTimeValue(time);
    if (input instanceof theDate.TheDate) {
        const timestamp = toTimestamp.toTimestamp(input);
        return theDate.TheDate.new(timestamp + timeValue);
    }
    if (input instanceof theTime.TheTime || isSerializedTheTime.isSerializedTheTime(input)) {
        const inputTimeValue = toTimeValue.toTimeValue(input);
        return theTime.TheTime.new(inputTimeValue + timeValue);
    }
    const timestamp = toTimestamp.toTimestamp(input);
    return theDate.TheDate.new(timestamp + timeValue);
}

exports.addTime = addTime;
