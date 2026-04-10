import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerBigIntMinKind = createDataParserKind("checker-bigint-min");
function checkerBigIntMin(min, definition = {}) {
    return dataParserCheckerInit(checkerBigIntMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error, self) => {
        if (value < self.definition.min) {
            return addIssue(error, `bigint >= ${self.definition.min}n`, value, self.definition.errorMessage);
        }
        return value;
    });
}

export { checkerBigIntMin, checkerBigIntMinKind };
