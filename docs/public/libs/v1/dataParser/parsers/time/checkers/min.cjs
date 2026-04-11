'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var greaterTime = require('../../../../date/operators/greaterTime.cjs');

const checkerTimeMinKind = kind.createDataParserKind("checker-time-min");
/**
 * {@include dataParser/classic/checkerTimeMin/index.md}
 */
function checkerTimeMin(min, definition = {}) {
    return base.dataParserCheckerInit(checkerTimeMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error$1, self) => greaterTime.greaterTime(value, self.definition.min)
        ? value
        : error.addIssue(error$1, `time >= ${self.definition.min.toString()}`, value, self.definition.errorMessage));
}

exports.checkerTimeMin = checkerTimeMin;
exports.checkerTimeMinKind = checkerTimeMinKind;
