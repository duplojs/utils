import { createCalledByNext } from './theFlow/calledByNext.mjs';

/* eslint-disable @typescript-eslint/require-await */
/**
 * {@include flow/calledByNext/index.md}
 */
async function* calledByNext(theFunction) {
    yield createCalledByNext(theFunction);
}

export { calledByNext };
