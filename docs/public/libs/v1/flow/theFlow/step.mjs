import { createFlowKind } from '../kind.mjs';

const stepKind = createFlowKind("step");
function createStep(name) {
    return stepKind.setTo({}, name);
}

export { createStep, stepKind };
