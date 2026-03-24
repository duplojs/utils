import { createFlowKind } from '../kind.mjs';

const dependenceHandlerKind = createFlowKind("dependence-handler");
/**
 * {@include flow/createDependence/index.md}
 */
function createDependence(name) {
    const dependenceHandler = function (implementation) {
        return implementation;
    };
    return dependenceHandlerKind.setTo(dependenceHandler, name);
}

export { createDependence, dependenceHandlerKind };
