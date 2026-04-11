'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const emptyKind = kind.createDataParserKind("empty");
/**
 * {@include dataParser/classic/empty/index.md}
 */
function empty(definition) {
    const self = base.dataParserInit(emptyKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error$1, self) => {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return error.addIssue(error$1, "undefined", data, self.definition.errorMessage);
    }, empty.overrideHandler);
    return self;
}
empty.overrideHandler = override.createOverride("@duplojs/utils/data-parser/empty");

exports.empty = empty;
exports.emptyKind = emptyKind;
