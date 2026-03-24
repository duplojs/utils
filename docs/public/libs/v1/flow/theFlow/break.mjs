import { createFlowKind } from '../kind.mjs';

const breakKind = createFlowKind("break");
function createBreak(value = undefined) {
    return breakKind.setTo({}, { value });
}

export { breakKind, createBreak };
