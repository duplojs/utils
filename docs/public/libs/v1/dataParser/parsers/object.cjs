'use strict';

var entries = require('../../object/entries.cjs');
var kind = require('../../common/kind.cjs');
var pipe = require('../../common/pipe.cjs');
var forward = require('../../common/forward.cjs');
var memo = require('../../common/memo.cjs');
var filter = require('../../array/filter.cjs');
var map = require('../../array/map.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserObjectKind = kind.createKind("data-parser-object");
function object(shape, definition) {
    return base.dataParserInit(dataParserObjectKind, {
        definition: {
            shape,
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            optimizedShape: memo.memo(() => pipe.pipe(forward.forward(shape), entries.entries, filter.filter((entry) => base.dataParserKind.has(entry[1])), map.map(([key, value]) => ({
                key,
                value,
            })))),
        },
    }, {
        sync: (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const entry of self.definition.optimizedShape.value) {
                error.setErrorPath(error$1, entry.key, currentIndexPath);
                const result = entry.value.exec(data[entry.key], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
        async: async (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const entry of self.definition.optimizedShape.value) {
                error.setErrorPath(error$1, entry.key, currentIndexPath);
                const result = await entry.value.asyncExec(data[entry.key], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
    });
}

exports.dataParserObjectKind = dataParserObjectKind;
exports.object = object;
