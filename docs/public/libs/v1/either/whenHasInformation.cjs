'use strict';

var unwrap = require('../common/unwrap.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var kind = require('./kind.cjs');
var is = require('./left/is.cjs');
var is$1 = require('./right/is.cjs');

function whenHasInformation(...args) {
    if (args.length === 2) {
        const [information, theFunction] = args;
        return (input) => whenHasInformation(input, information, theFunction);
    }
    const [input, information, theFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if ((is.isLeft(input)
        || is$1.isRight(input)) && formattedInformation.includes(kind.eitherInformationKind.getValue(input))) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenHasInformation = whenHasInformation;
