import { unwrap } from '../../../common/unwrap.mjs';
import { sort as sort$1 } from '../../../number/sort.mjs';
import { wrapValue } from '../../../common/wrapValue.mjs';
import { is } from '../../../date/is.mjs';
import { sort as sort$2 } from '../../../date/sort.mjs';
import { isTime } from '../../../date/isTime.mjs';
import { sortTimes } from '../../../date/sortTimes.mjs';
import { sort as sort$3 } from '../../../string/sort.mjs';

function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return ((input) => sort(input, type));
    }
    const [input, type] = args;
    const rawArray = input.map(unwrap);
    const first = rawArray.at(0);
    if (!first) {
        return [];
    }
    if (typeof first === "number") {
        return sort$1(rawArray, type)
            .map(wrapValue);
    }
    else if (is(first)) {
        return sort$2(rawArray, type)
            .map(wrapValue);
    }
    else if (isTime(first)) {
        return sortTimes(rawArray, type)
            .map(wrapValue);
    }
    else {
        return sort$3(rawArray, type)
            .map(wrapValue);
    }
}

export { sort };
