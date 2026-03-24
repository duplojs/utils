import { createDefer } from './theFlow/defer.mjs';

/**
 * {@include flow/defer/index.md}
 */
function* defer(theFunction) {
    yield createDefer(theFunction);
}

export { defer };
