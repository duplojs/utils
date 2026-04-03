import { createFlowKind } from '../kind.mjs';

const calledByNextKind = createFlowKind("called-by-next");
function createCalledByNext(value) {
    return calledByNextKind.setTo({}, value);
}

export { calledByNextKind, createCalledByNext };
