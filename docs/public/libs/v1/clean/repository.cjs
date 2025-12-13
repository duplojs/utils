'use strict';

var kind = require('./kind.cjs');

const repositoryHandlerKind = kind.createCleanKind("repository-handler");
function createRepository() {
    return repositoryHandlerKind.setTo({
        createImplementation(implementation) {
            return implementation;
        },
    });
}

exports.createRepository = createRepository;
exports.repositoryHandlerKind = repositoryHandlerKind;
