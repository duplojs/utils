'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const nilKind = kind.createDataParserKind("nil");
/**
 * {@include dataParser/classic/nil/index.md}
 */
function nil(definition) {
    const self = base.dataParserInit(nilKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return error.SymbolDataParserErrorIssue;
    }, nil.overrideHandler);
    return self;
}
nil.overrideHandler = override.createOverride("@duplojs/utils/data-parser/nil");

exports.nil = nil;
exports.nilKind = nilKind;
