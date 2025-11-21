import { dataParserCheckerInit } from '../../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../../error.mjs';
import { number } from '../index.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerIntKind = createDataParserKind("checker-number-int");
function checkerInt(definition = {}) {
    return dataParserCheckerInit(checkerIntKind, {
        definition,
    }, (data) => {
        if (Number.isInteger(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    });
}
function int(definition) {
    return number({
        checkers: [checkerInt(definition)],
    });
}

export { checkerInt, checkerIntKind, int };
