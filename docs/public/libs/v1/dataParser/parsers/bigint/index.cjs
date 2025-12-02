'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var override = require('../../../common/override.cjs');

const bigIntKind = kind.createDataParserKind("bigint");
function bigint(definition) {
    const self = base.dataParserInit(bigIntKind, {
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
    return bigint.overrideHandler.apply(self);
}
bigint.overrideHandler = override.createOverride("@duplojs/utils/data-parser/bigint");

exports.bigIntKind = bigIntKind;
exports.bigint = bigint;
