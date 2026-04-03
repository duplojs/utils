import { createFlowKind } from '../kind.mjs';

const queueKind = createFlowKind("queue");
function createQueue(properties) {
    return queueKind.setTo({}, properties);
}

export { createQueue, queueKind };
