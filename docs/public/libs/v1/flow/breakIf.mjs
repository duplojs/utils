import { createBreak } from './theFlow/break.mjs';

function* breakIf(value, thePredicate) {
    if (thePredicate(value) === true) {
        yield createBreak(value);
    }
    else {
        return value;
    }
}

export { breakIf };
