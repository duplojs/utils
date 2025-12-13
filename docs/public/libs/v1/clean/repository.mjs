import { createCleanKind } from './kind.mjs';

const repositoryHandlerKind = createCleanKind("repository-handler");
function createRepository() {
    return repositoryHandlerKind.setTo({
        createImplementation(implementation) {
            return implementation;
        },
    });
}

export { createRepository, repositoryHandlerKind };
