import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerNumberMaxKind = createDataParserKind("checker-number-max");
function checkerNumberMax(max, definition = {}) {
    return dataParserCheckerInit(checkerNumberMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error, self) => value <= self.definition.max
        ? value
        : addIssue(error, `number <= ${self.definition.max}`, value, self.definition.errorMessage));
}

export { checkerNumberMax, checkerNumberMaxKind };
