'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var min = require('./checkers/min.cjs');
var max = require('./checkers/max.cjs');

const bigIntKind = kind.createDataParserKind("bigint");
function bigint(definition) {
    return base.dataParserInit(bigIntKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = BigInt(data);
            }
            catch { }
        }
        if (typeof data === "bigint") {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.checkerBigIntMin = min.checkerBigIntMin;
exports.checkerBigIntMinKind = min.checkerBigIntMinKind;
exports.checkerBigIntMax = max.checkerBigIntMax;
exports.checkerBigIntMaxKind = max.checkerBigIntMaxKind;
exports.bigIntKind = bigIntKind;
exports.bigint = bigint;
