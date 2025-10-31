import { dataParserInit, SymbolDataParserError } from '../../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';

const dataParserArrayKind = createDataParserKind("array");
function array(element, definition) {
    return dataParserInit(dataParserArrayKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            element,
        },
    }, {
        sync: (data, error, self) => {
            if (!(data instanceof Array)) {
                return SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error.currentPath.length;
            for (let index = 0; index < data.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = self
                    .definition
                    .element
                    .exec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            popErrorPath(error);
            return output;
        },
        async: async (data, error, self) => {
            if (!(data instanceof Array)) {
                return SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error.currentPath.length;
            for (let index = 0; index < data.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = await self
                    .definition
                    .element
                    .asyncExec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            popErrorPath(error);
            return output;
        },
    });
}

export { array, dataParserArrayKind };
