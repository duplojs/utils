import { theDateRegex } from './constants.mjs';

function is(input) {
    return theDateRegex.test(input);
}

export { is };
