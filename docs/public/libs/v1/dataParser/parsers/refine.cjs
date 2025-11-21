'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const dataParserCheckerRefineKind = kind.createDataParserKind("checker-string-max");
function checkerRefine(theFunction, definition) {
    return base.dataParserCheckerInit(dataParserCheckerRefineKind, {
        definition: {
            ...definition,
            theFunction,
        },
    }, (value, self) => self.definition.theFunction(value) ? value : error.SymbolDataParserErrorIssue);
}

exports.checkerRefine = checkerRefine;
exports.dataParserCheckerRefineKind = dataParserCheckerRefineKind;
