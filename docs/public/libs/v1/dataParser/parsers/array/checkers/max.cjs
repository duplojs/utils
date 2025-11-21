'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerArrayMaxKind = kind.createDataParserKind("checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerArrayMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (data, self) => {
        if (data.length > self.definition.max) {
            return error.SymbolDataParserErrorIssue;
        }
        return data;
    });
}

exports.checkerArrayMax = checkerArrayMax;
exports.checkerArrayMaxKind = checkerArrayMaxKind;
