const minTimestamp = -864e13;
const maxTimestamp = 8640000000000000;
const millisecondInOneWeek = 604800000;
const millisecondsInOneDay = 86400000;
const millisecondInOneHour = 3600000;
const millisecondInOneMinute = 60000;
const millisecondsInOneSecond = 1000;
const daysInOneWeek = 7;
const monthsInOneYear = 12;
const minutesInOneHour = 60;
const secondsInOneMinute = 60;
const hoursInOneDay = 24;
const theDateRegex = /^date-?(?<value>\d{1,16})(?<sign>[+-])$/;
const isoDateRegex = /^(?<year>-?[0-9]{4})-(?<month>[0-9]{2})-(?<date>[0-9]{2})(?:T(?<hour>[0-9]{2}):(?<minute>[0-9]{2}):(?<second>[0-9]{2})(?:\.(?<millisecond>[0-9]{3}))?Z?)?$/;
const theTimeRegex = /^time-?(?<value>\d{1,16})(?<sign>[+-])$/;
const isoTimeRegex = /^(?<sign>[+-])?(?<hour>[0-9]{2}):(?<minute>[0-9]{2})(?::(?<second>[0-9]{2})(?:\.(?<millisecond>[0-9]{3}))?Z?)?$/;

export { daysInOneWeek, hoursInOneDay, isoDateRegex, isoTimeRegex, maxTimestamp, millisecondInOneHour, millisecondInOneMinute, millisecondInOneWeek, millisecondsInOneDay, millisecondsInOneSecond, minTimestamp, minutesInOneHour, monthsInOneYear, secondsInOneMinute, theDateRegex, theTimeRegex };
