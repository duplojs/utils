import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { createOverride } from '../common/override.mjs';

const portHandlerKind = createCleanKind("port-handler");
/**
 * {@include clean/createPort/index.md}
 */
function createPort() {
    return pipe({
        createImplementation(implementation) {
            return implementation;
        },
    }, portHandlerKind.setTo, createPort.overrideHandler.apply);
}
createPort.overrideHandler = createOverride("@duplojs/utils/clean/port");

export { createPort, portHandlerKind };
