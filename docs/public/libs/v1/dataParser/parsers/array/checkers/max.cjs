'use strict';

var kind = require('../../../../common/kind.cjs');
var base = require('../../../base.cjs');
var error = require('../../../error.cjs');

const dataParserCheckerArrayMaxKind = kind.createKind("data-parser-checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return base.dataParserCheckerInit(dataParserCheckerArrayMaxKind, {
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
exports.dataParserCheckerArrayMaxKind = dataParserCheckerArrayMaxKind;
