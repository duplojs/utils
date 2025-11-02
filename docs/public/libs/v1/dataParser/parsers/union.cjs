'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const unionKind = kind.createDataParserKind("union");
function union(options, definition) {
    return base.dataParserInit(unionKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            options,
        },
    }, {
        sync: (data, error$1, self) => {
            for (const dataParser of self.definition.options) {
                const result = dataParser.exec(data, error$1);
                if (result !== base.SymbolDataParserError) {
                    return result;
                }
            }
            return error.SymbolDataParserErrorIssue;
        },
        async: async (data, error$1, self) => {
            for (const dataParser of self.definition.options) {
                const result = await dataParser.asyncExec(data, error$1);
                if (result !== base.SymbolDataParserError) {
                    return result;
                }
            }
            return error.SymbolDataParserErrorIssue;
        },
    });
}

exports.union = union;
exports.unionKind = unionKind;
