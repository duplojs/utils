import { createFlowKind } from '../kind.mjs';

const theFlowKind = createFlowKind("the-flow");
/**
 * {@include flow/create/index.md}
 */
function create(theFunction) {
    return theFlowKind.setTo({}, { run: theFunction });
}

export { create, theFlowKind };
