import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerBigIntMaxKind = createDataParserKind("checker-bigint-max");
function checkerBigIntMax(max, definition = {}) {
    return dataParserCheckerInit(checkerBigIntMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error, self) => {
        if (value > self.definition.max) {
            return addIssue(error, `bigint <= ${self.definition.max}n`, value, self.definition.errorMessage);
        }
        return value;
    });
}

export { checkerBigIntMax, checkerBigIntMaxKind };
