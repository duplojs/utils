import { wrapValue } from '../../../../common/wrapValue.mjs';
import { createTheTime } from '../../../../date/createTheTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';
import { toTimeValue } from '../../../../date/toTimeValue.mjs';

function timeMax(input) {
    return wrapValue(createTheTime(Math.max(...input.map(unwrap).map(toTimeValue))));
}

export { timeMax };
