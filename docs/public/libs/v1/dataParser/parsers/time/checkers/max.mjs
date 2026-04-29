import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { lessTime } from '../../../../date/operators/lessTime.mjs';

const checkerTimeMaxKind = createDataParserKind("checker-time-max");
/**
 * {@include dataParser/classic/checkerTimeMax/index.md}
 */
function checkerTimeMax(max, definition = {}) {
    return dataParserCheckerInit(checkerTimeMaxKind, {
        definition: {
            ...definition,
            max,
        },
    }, (value, error, self, dataParser) => lessTime(value, self.definition.max)
        ? value
        : addIssue(error, `time <= ${self.definition.max.toString()}`, value, self.definition.errorMessage ?? dataParser.definition.errorMessage));
}

export { checkerTimeMax, checkerTimeMaxKind };
