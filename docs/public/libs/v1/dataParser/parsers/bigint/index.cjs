'use strict';

var kind = require('../../../common/kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');

const dataParserBigIntKind = kind.createKind("data-parser-bigint");
function bigint(definition) {
    return base.dataParserInit(dataParserBigIntKind, {
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

exports.bigint = bigint;
exports.dataParserBigIntKind = dataParserBigIntKind;
