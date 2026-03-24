import { createExit } from './theFlow/exit.mjs';

function* exitIf(value, thePredicate) {
    if (thePredicate(value) === true) {
        yield createExit(value);
    }
    else {
        return value;
    }
}

export { exitIf };
