'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');
var lessTime = require('../../../../date/operators/lessTime.cjs');

const checkerTimeMaxKind = kind.createDataParserKind("checker-time-max");
/**
 * {@include dataParser/classic/checkerTimeMax/index.md}
 */
function checkerTimeMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerTimeMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error$1, self) => lessTime.lessTime(value, self.definition.max)
        ? value
        : error.addIssue(error$1, `time <= ${self.definition.max.toString()}`, value, self.definition.errorMessage));
}

exports.checkerTimeMax = checkerTimeMax;
exports.checkerTimeMaxKind = checkerTimeMaxKind;
