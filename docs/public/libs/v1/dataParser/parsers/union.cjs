'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var some = require('../../array/some.cjs');
var override = require('../../common/override.cjs');

const unionKind = kind.createDataParserKind("union");
/**
 * {@include dataParser/classic/union/index.md}
 */
function union(options, definition) {
    const self = base.dataParserInit(unionKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        options,
    }, {
        sync: (data, error$1, self) => {
            const unionError = {
                ...error$1,
                currentPath: [...error$1.currentPath],
                issues: [],
            };
            const currentIndexPath = unionError.currentPath.length;
            for (let index = 0; index < self.definition.options.length; index++) {
                error.setErrorPath(unionError, `(option ${index})`, currentIndexPath);
                const dataParser = self.definition.options[index];
                const result = dataParser.exec(data, unionError);
                if (result !== error.SymbolDataParserError) {
                    return result;
                }
            }
            error$1.issues.push(...unionError.issues);
            return error.addIssue(error$1, "respect at least one union value", data, self.definition.errorMessage);
        },
        async: async (data, error$1, self) => {
            const unionError = {
                ...error$1,
                currentPath: [...error$1.currentPath],
                issues: [],
            };
            const currentIndexPath = unionError.currentPath.length;
            for (let index = 0; index < self.definition.options.length; index++) {
                error.setErrorPath(unionError, `(option ${index})`, currentIndexPath);
                const dataParser = self.definition.options[index];
                const result = await dataParser.asyncExec(data, unionError);
                if (result !== error.SymbolDataParserError) {
                    return result;
                }
            }
            error$1.issues.push(...unionError.issues);
            return error.addIssue(error$1, "respect at least one union value", data, self.definition.errorMessage);
        },
        isAsynchronous: (self) => some.some(self.definition.options, (element) => element.isAsynchronous()),
    }, union.overrideHandler);
    return self;
}
union.overrideHandler = override.createOverride("@duplojs/utils/data-parser/union");

exports.union = union;
exports.unionKind = unionKind;
