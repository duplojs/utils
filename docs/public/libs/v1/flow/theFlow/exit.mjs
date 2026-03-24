import { createFlowKind } from '../kind.mjs';

const exitKind = createFlowKind("exit");
function createExit(value = undefined) {
    return exitKind.setTo({}, { value });
}

export { createExit, exitKind };
