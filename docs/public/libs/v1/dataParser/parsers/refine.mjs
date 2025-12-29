import { dataParserCheckerInit } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserCheckerRefineKind = createDataParserKind("refine");
function checkerRefine(theFunction, definition) {
    return dataParserCheckerInit(dataParserCheckerRefineKind, {
        definition: {
            ...definition,
            theFunction,
        },
    }, (value, self) => self.definition.theFunction(value) ? value : SymbolDataParserErrorIssue);
}

export { checkerRefine, dataParserCheckerRefineKind };
