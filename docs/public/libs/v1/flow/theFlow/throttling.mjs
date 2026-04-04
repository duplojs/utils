import { createFlowKind } from '../kind.mjs';

const throttlingKind = createFlowKind("throttling");
function createThrottling(properties) {
    return throttlingKind.setTo({}, properties);
}

export { createThrottling, throttlingKind };
