import { createFlowKind } from '../kind.mjs';

const theFLowKind = createFlowKind("the-flow");
/**
 * {@include flow/create/index.md}
 */
function create(theFunction) {
    return theFLowKind.setTo({}, { run: theFunction });
}

export { create, theFLowKind };
