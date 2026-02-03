import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { createOverride } from '../common/override.mjs';

const repositoryHandlerKind = createCleanKind("repository-handler");
/**
 * {@include clean/createRepository/index.md}
 */
function createRepository() {
    return pipe({
        createImplementation(implementation) {
            return implementation;
        },
    }, repositoryHandlerKind.setTo, createRepository.overrideHandler.apply);
}
createRepository.overrideHandler = createOverride("@duplojs/utils/clean/repository");

export { createRepository, repositoryHandlerKind };
