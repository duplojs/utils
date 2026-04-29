'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerNumberMaxKind = kind.createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error$1, self, dataParser) => value <= self.definition.max
        ? value
        : error.addIssue(error$1, `number <= ${self.definition.max}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

exports.checkerNumberMax = checkerNumberMax;
exports.checkerNumberMaxKind = checkerNumberMaxKind;
