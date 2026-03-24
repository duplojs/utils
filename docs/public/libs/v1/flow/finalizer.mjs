import { createFinalizer } from './theFlow/finalizer.mjs';

/**
 * {@include flow/finalizer/index.md}
 */
function* finalizer(theFunction) {
    yield createFinalizer(theFunction);
}

export { finalizer };
