import { createDebounce } from './theFlow/debounce.mjs';

/* eslint-disable @typescript-eslint/require-await */
/**
 * {@include flow/debounce/index.md}
 */
async function* debounce(time, params) {
    yield createDebounce({
        time,
        returnValue: params?.returnValue,
    });
}

export { debounce };
