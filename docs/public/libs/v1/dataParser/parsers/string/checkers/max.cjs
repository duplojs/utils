'use strict';

var base = require('../../../base.cjs');
var error = require('../../../error.cjs');
var kind = require('../../../kind.cjs');

const checkerStringMaxKind = kind.createDataParserKind("checker-string-max");
function checkerStringMax(max, definition = {}) {
    return base.dataParserCheckerInit(checkerStringMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (data, error$1, self, dataParser) => data.length <= self.definition.max
        ? data
        : error.addIssue(error$1, `string.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

exports.checkerStringMax = checkerStringMax;
exports.checkerStringMaxKind = checkerStringMaxKind;
