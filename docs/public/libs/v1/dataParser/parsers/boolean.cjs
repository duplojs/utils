'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserBooleanKind = kind.createKind("data-parser-boolean");
function boolean(definition) {
    return base.dataParserInit(dataParserBooleanKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (typeof data === "boolean") {
            return data;
        }
        else if (self.definition.coerce) {
            if (typeof data === "string") {
                const lower = data.trim().toLowerCase();
                if (lower === "true" || lower === "false") {
                    return lower === "true";
                }
                else {
                    return error.SymbolDataParserErrorIssue;
                }
            }
            else if (typeof data === "number"
                && (data === 0
                    || data === 1)) {
                return data === 1;
            }
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.boolean = boolean;
exports.dataParserBooleanKind = dataParserBooleanKind;
