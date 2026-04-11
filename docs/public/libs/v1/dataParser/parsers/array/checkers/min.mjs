import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerArrayMinKind = createDataParserKind("checker-array-min");
function checkerArrayMin(min, definition = {}) {
    return dataParserCheckerInit(checkerArrayMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (data, error, self) => data.length >= self.definition.min
        ? data
        : addIssue(error, `array.length >= ${self.definition.min}`, data, self.definition.errorMessage));
}

export { checkerArrayMin, checkerArrayMinKind };
