import { createFlowKind } from '../kind.mjs';

const injectionKind = createFlowKind("injection");
function createInjection(properties) {
    return injectionKind.setTo({}, properties);
}

export { createInjection, injectionKind };
