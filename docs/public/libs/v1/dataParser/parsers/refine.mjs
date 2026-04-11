import { dataParserCheckerInit } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const dataParserCheckerRefineKind = createDataParserKind("refine");
function checkerRefine(theFunction, definition) {
    return dataParserCheckerInit(dataParserCheckerRefineKind, {
        definition: {
            ...definition,
            theFunction,
        },
    }, (value, error, self) => self.definition.theFunction(value)
        ? value
        : addIssue(error, "value matching refine predicate", value, self.definition.errorMessage));
}

export { checkerRefine, dataParserCheckerRefineKind };
