'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const dataParserCheckerRefineKind = kind.createDataParserKind("refine");
function checkerRefine(theFunction, definition) {
    return base.dataParserCheckerInit(dataParserCheckerRefineKind, {
        definition: {
            ...definition,
            theFunction,
        },
    }, (value, error$1, self) => self.definition.theFunction(value)
        ? value
        : error.addIssue(error$1, "value matching refine predicate", value, self.definition.errorMessage));
}

exports.checkerRefine = checkerRefine;
exports.dataParserCheckerRefineKind = dataParserCheckerRefineKind;
