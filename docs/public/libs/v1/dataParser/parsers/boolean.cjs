'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const booleanKind = kind.createDataParserKind("boolean");
/**
 * {@include dataParser/classic/boolean/index.md}
 */
function boolean(definition) {
    const self = base.dataParserInit(booleanKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error$1, self) => {
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
                    return error.addIssue(error$1, "boolean", data, self.definition.errorMessage);
                }
            }
            else if (typeof data === "number"
                && (data === 0
                    || data === 1)) {
                return data === 1;
            }
        }
        return error.addIssue(error$1, "boolean", data, self.definition.errorMessage);
    }, boolean.overrideHandler);
    return self;
}
boolean.overrideHandler = override.createOverride("@duplojs/utils/data-parser/boolean");

exports.boolean = boolean;
exports.booleanKind = booleanKind;
