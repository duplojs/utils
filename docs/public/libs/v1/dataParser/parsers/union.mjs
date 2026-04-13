import { dataParserInit } from '../base.mjs';
import { setErrorPath, SymbolDataParserError, addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';
import { some } from '../../array/some.mjs';
import { createOverride } from '../../common/override.mjs';

const unionKind = createDataParserKind("union");
/**
 * {@include dataParser/classic/union/index.md}
 */
function union(options, definition) {
    const self = dataParserInit(unionKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        options,
    }, {
        sync: (data, error, self) => {
            const unionError = {
                ...error,
                currentPath: [...error.currentPath],
                issues: [],
            };
            const currentIndexPath = unionError.currentPath.length;
            for (let index = 0; index < self.definition.options.length; index++) {
                setErrorPath(unionError, `(option: ${index})`, currentIndexPath);
                const dataParser = self.definition.options[index];
                const result = dataParser.exec(data, unionError);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            error.issues.push(...unionError.issues);
            return addIssue(error, "respect at least one union value", data, self.definition.errorMessage);
        },
        async: async (data, error, self) => {
            const unionError = {
                ...error,
                currentPath: [...error.currentPath],
                issues: [],
            };
            const currentIndexPath = unionError.currentPath.length;
            for (let index = 0; index < self.definition.options.length; index++) {
                setErrorPath(unionError, `(option: ${index})`, currentIndexPath);
                const dataParser = self.definition.options[index];
                const result = await dataParser.asyncExec(data, unionError);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            error.issues.push(...unionError.issues);
            return addIssue(error, "respect at least one union value", data, self.definition.errorMessage);
        },
        isAsynchronous: (self) => some(self.definition.options, (element) => element.isAsynchronous()),
    }, union.overrideHandler);
    return self;
}
union.overrideHandler = createOverride("@duplojs/utils/data-parser/union");

export { union, unionKind };
