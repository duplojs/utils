import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { greaterTime } from '../../../../date/operators/greaterTime.mjs';

const checkerTimeMinKind = createDataParserKind("checker-time-min");
/**
 * {@include dataParser/classic/checkerTimeMin/index.md}
 */
function checkerTimeMin(min, definition = {}) {
    return dataParserCheckerInit(checkerTimeMinKind, {
        definition: {
            ...definition,
            min,
        },
    }, (value, error, self) => greaterTime(value, self.definition.min)
        ? value
        : addIssue(error, `time >= ${self.definition.min.toString()}`, value, self.definition.errorMessage));
}

export { checkerTimeMin, checkerTimeMinKind };
