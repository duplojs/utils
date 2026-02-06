import { wrapValue } from '../../../../common/wrapValue.mjs';
import { TheTime } from '../../../../date/theTime.mjs';
import { unwrap } from '../../../../common/unwrap.mjs';
import { toTimeValue } from '../../../../date/toTimeValue.mjs';

/**
 * {@include clean/timeMin/index.md}
 */
function timeMin(input) {
    return wrapValue(TheTime.new(Math.min(...input.map(unwrap).map(toTimeValue))));
}

export { timeMin };
