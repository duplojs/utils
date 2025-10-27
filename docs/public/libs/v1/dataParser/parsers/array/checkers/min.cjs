'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerArrayMinKind = kind.createKind("data-parser-checker-array-min");
function checkerArrayMin(min, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerArrayMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (data, self) => {
        if (data.length < self.definition.min) {
            return error.SymbolDataParserErrorIssue;
        }
        return data;
    });
}

exports.checkerArrayMin = checkerArrayMin;
exports.dataParserCheckerArrayMinKind = dataParserCheckerArrayMinKind;
