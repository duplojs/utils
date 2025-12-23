'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var override = require('../../../common/override.cjs');

const numberKind = kind.createDataParserKind("number");
function number(definition) {
    const self = base.dataParserInit(numberKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
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
    return number.overrideHandler.apply(self);
}
number.overrideHandler = override.createOverride("@duplojs/utils/data-parser/number");

exports.number = number;
exports.numberKind = numberKind;
