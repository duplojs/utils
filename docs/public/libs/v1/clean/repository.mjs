import { createCleanKind } from './kind.mjs';

const repositoryHandlerKind = createCleanKind("repository-handler");
/**
 * {@include clean/createRepository/index.md}
 */
function createRepository() {
    return repositoryHandlerKind.setTo({
        createImplementation(implementation) {
            return implementation;
        },
    });
}

export { createRepository, repositoryHandlerKind };
