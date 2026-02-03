'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var override = require('../common/override.cjs');

const repositoryHandlerKind = kind.createCleanKind("repository-handler");
/**
 * {@include clean/createRepository/index.md}
 */
function createRepository() {
    return pipe.pipe({
        createImplementation(implementation) {
            return implementation;
        },
    }, repositoryHandlerKind.setTo, createRepository.overrideHandler.apply);
}
createRepository.overrideHandler = override.createOverride("@duplojs/utils/clean/repository");

exports.createRepository = createRepository;
exports.repositoryHandlerKind = repositoryHandlerKind;
