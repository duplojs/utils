'use strict';

var unwrap = require('../../../common/unwrap.cjs');
var sort$1 = require('../../../number/sort.cjs');
var wrapValue = require('../../../common/wrapValue.cjs');
var is = require('../../../date/is.cjs');
var sort$2 = require('../../../date/sort.cjs');
var sort$3 = require('../../../string/sort.cjs');

function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return ((input) => sort(input, type));
    }
    const [input, type] = args;
    const rawArray = input.map(unwrap.unwrap);
    const first = rawArray.at(0);
    if (!first) {
        return [];
    }
    if (typeof first === "number") {
        return sort$1.sort(rawArray, type)
            .map(wrapValue.wrapValue);
    }
    else if (is.is(first)) {
        return sort$2.sort(rawArray, type)
            .map(wrapValue.wrapValue);
    }
    else {
        return sort$3.sort(rawArray, type)
            .map(wrapValue.wrapValue);
    }
}

exports.sort = sort;
