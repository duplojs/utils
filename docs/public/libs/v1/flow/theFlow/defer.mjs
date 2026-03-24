import { createFlowKind } from '../kind.mjs';

const deferKind = createFlowKind("defer");
function createDefer(value) {
    return deferKind.setTo({}, value);
}

export { createDefer, deferKind };
