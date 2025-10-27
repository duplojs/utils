import { createKind } from '../../common/kind.mjs';
import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorIssue, setErrorPath, popErrorPath } from '../error.mjs';

const dataParserTupleKind = createKind("data-parser-tuple");
function tuple(shape, definition) {
    return dataParserInit(dataParserTupleKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            rest: definition?.rest,
            shape,
        },
    }, {
        sync: (data, error, self) => {
            if (!(data instanceof Array)) {
                return SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error.currentPath.length;
            for (let index = 0; index < self.definition.shape.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = self.definition.shape[index]?.exec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            if (self.definition.rest) {
                for (let index = self.definition.shape.length; index < data.length; index++) {
                    setErrorPath(error, `[${index}]`, currentIndexPath);
                    const result = self.definition.rest.exec(data[index], error);
                    if (result === SymbolDataParserError) {
                        output = SymbolDataParserError;
                    }
                    else if (output !== SymbolDataParserError) {
                        output.push(result);
                    }
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
            for (let index = 0; index < self.definition.shape.length; index++) {
                setErrorPath(error, `[${index}]`, currentIndexPath);
                const result = await self.definition.shape[index]?.asyncExec(data[index], error);
                if (result === SymbolDataParserError) {
                    output = SymbolDataParserError;
                }
                else if (output !== SymbolDataParserError) {
                    output.push(result);
                }
            }
            if (self.definition?.rest) {
                for (let index = self.definition.shape.length; index < data.length; index++) {
                    setErrorPath(error, `[${index}]`, currentIndexPath);
                    const result = await self.definition.rest.asyncExec(data[index], error);
                    if (result === SymbolDataParserError) {
                        output = SymbolDataParserError;
                    }
                    else if (output !== SymbolDataParserError) {
                        output.push(result);
                    }
                }
            }
            popErrorPath(error);
            return output;
        },
    });
}

export { dataParserTupleKind, tuple };
