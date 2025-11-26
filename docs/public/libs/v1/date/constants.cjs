'use strict';

const minTimestamp = -864e13;
const maxTimestamp = 8640000000000000;
const millisecondInOneWeek = 604800000;
const millisecondsInOneDay = 86400000;
const millisecondInOneHour = 3600000;
const millisecondInOneMinute = 60000;
const daysInOneWeek = 7;
const monthtsInOneYear = 12;
const minutesInOneHour = 60;
const secondsInOneMinute = 60;
const millisecondsInOneSecond = 1000;
const hoursInOneDay = 24;
const theDateRegex = /^date(?<value>\d{1,16})(?<sign>[+-])$/;

exports.daysInOneWeek = daysInOneWeek;
exports.hoursInOneDay = hoursInOneDay;
exports.maxTimestamp = maxTimestamp;
exports.millisecondInOneHour = millisecondInOneHour;
exports.millisecondInOneMinute = millisecondInOneMinute;
exports.millisecondInOneWeek = millisecondInOneWeek;
exports.millisecondsInOneDay = millisecondsInOneDay;
exports.millisecondsInOneSecond = millisecondsInOneSecond;
exports.minTimestamp = minTimestamp;
exports.minutesInOneHour = minutesInOneHour;
exports.monthtsInOneYear = monthtsInOneYear;
exports.secondsInOneMinute = secondsInOneMinute;
exports.theDateRegex = theDateRegex;
