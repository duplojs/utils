'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var override = require('../../../common/override.cjs');

const stringKind = kind.createDataParserKind("string");
function string(definition) {
    const self = base.dataParserInit(stringKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return string.overrideHandler.apply(self);
}
string.overrideHandler = override.createOverride("@duplojs/utils/data-parser/string");

exports.string = string;
exports.stringKind = stringKind;
