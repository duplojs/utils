import { createFlowKind } from '../kind.mjs';

const finalizerKind = createFlowKind("finalizer");
function createFinalizer(value) {
    return finalizerKind.setTo({}, value);
}

export { createFinalizer, finalizerKind };
