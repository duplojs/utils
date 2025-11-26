'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var int = require('./checkers/int.cjs');
var min = require('./checkers/min.cjs');
var max = require('./checkers/max.cjs');

const numberKind = kind.createDataParserKind("number");
function number(definition) {
    return base.dataParserInit(numberKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.checkerInt = int.checkerInt;
exports.checkerIntKind = int.checkerIntKind;
exports.int = int.int;
exports.checkerNumberMin = min.checkerNumberMin;
exports.checkerNumberMinKind = min.checkerNumberMinKind;
exports.checkerNumberMax = max.checkerNumberMax;
exports.checkerNumberMaxKind = max.checkerNumberMaxKind;
exports.number = number;
exports.numberKind = numberKind;
