import { createFlowKind } from '../kind.mjs';
import { pipe } from '../../common/pipe.mjs';

const dependenceHandlerKind = createFlowKind("dependence-handler");
/**
 * {@include flow/createDependence/index.md}
 */
function createDependence(name) {
    const dependenceHandler = function (implementation) {
        return implementation;
    };
    return pipe(dependenceHandler, (value) => dependenceHandlerKind.setTo(value, name));
}

export { createDependence, dependenceHandlerKind };
