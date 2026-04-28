import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';

const checkerArrayMaxKind = createDataParserKind("checker-array-max");
function checkerArrayMax(max, definition = {}) {
    return dataParserCheckerInit(checkerArrayMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (data, error, self, dataParser) => data.length <= self.definition.max
        ? data
        : addIssue(error, `array.length <= ${self.definition.max}`, data, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

export { checkerArrayMax, checkerArrayMaxKind };
