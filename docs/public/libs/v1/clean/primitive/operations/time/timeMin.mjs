import { toTimestamp } from '../../../../date/toTimestamp.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { createTheTime } from '../../../../date/createTheTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function timeMin(input) {
    return wrapValue(createTheTime(Math.min(...input.map(unwrap).map(toTimestamp))));
}

export { timeMin };
