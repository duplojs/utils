import { createFlowKind } from '../kind.mjs';

const debounceKind = createFlowKind("debounce");
function createDebounce(properties) {
    return debounceKind.setTo({}, properties);
}

export { createDebounce, debounceKind };
