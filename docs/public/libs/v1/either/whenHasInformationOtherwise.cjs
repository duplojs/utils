'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function whenHasInformationOtherwise(...args) {
    if (args.length === 3) {
        const [information, theFunction, otherwiseFunction] = args;
        return (input) => whenHasInformationOtherwise(input, information, theFunction, otherwiseFunction);
    }
    const [input, information, theFunction, otherwiseFunction] = args;
    const formattedInformation = information instanceof Array
        ? information
        : [information];
    if (kind.informationKind.has(input)
        && formattedInformation.includes(kind.informationKind.getValue(input))) {
        return theFunction(unwrap.unwrap(input));
    }
    return otherwiseFunction(input);
}

exports.whenHasInformationOtherwise = whenHasInformationOtherwise;
