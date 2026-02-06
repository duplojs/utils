import { wrapValue } from '../../../../common/wrapValue.mjs';
import { TheTime } from '../../../../date/theTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';
import { toTimeValue } from '../../../../date/toTimeValue.mjs';

/**
 * {@include clean/timeMax/index.md}
 */
function timeMax(input) {
    return wrapValue(TheTime.new(Math.max(...input.map(unwrap).map(toTimeValue))));
}

export { timeMax };
