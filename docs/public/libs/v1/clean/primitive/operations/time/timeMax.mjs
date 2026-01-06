import { wrapValue } from '../../../../common/wrapValue.mjs';
import { createTheTime } from '../../../../date/createTheTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';
import { toTimestamp } from '../../../../date/toTimestamp.mjs';

function timeMax(input) {
    return wrapValue(createTheTime(Math.max(...input.map(unwrap).map(toTimestamp))));
}

export { timeMax };
