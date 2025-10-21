'use strict';

var isMatch = require('./isMatch.cjs');
var pattern = require('./types/pattern.cjs');

const SymbolToolPatternFunction = Symbol.for(pattern.SymbolToolPatternFunctionLabel);
function union(...patterns) {
    return {
        [SymbolToolPatternFunction]: (input) => {
            for (const pattern of patterns) {
                if (isMatch.isMatch(input, pattern)) {
                    return true;
                }
            }
            return false;
        },
    };
}

exports.union = union;
