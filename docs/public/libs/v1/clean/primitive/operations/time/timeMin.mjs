import { toTimeValue } from '../../../../date/toTimeValue.mjs';
import { wrapValue } from '../../../../common/wrapValue.mjs';
import { createTheTime } from '../../../../date/createTheTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';

function timeMin(input) {
    return wrapValue(createTheTime(Math.min(...input.map(unwrap).map(toTimeValue))));
}

export { timeMin };
