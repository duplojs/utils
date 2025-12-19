'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var map = require('../array/map.cjs');
var entry = require('../object/entry.cjs');
var uncapitalize = require('../string/uncapitalize.cjs');
var entries = require('../object/entries.cjs');
var fromEntries = require('../object/fromEntries.cjs');

const useCaseHandlerKind = kind.createCleanKind("use-case-handler");
function createUseCase(dependencies, getUseCase) {
    return useCaseHandlerKind.setTo({
        dependencies,
        getUseCase: (repositories) => getUseCase(pipe.pipe(dependencies, entries.entries, map.map(([key, value]) => entry.entry(uncapitalize.uncapitalize(key), useCaseHandlerKind.has(value)
            ? value.getUseCase(repositories)
            : repositories[key])), fromEntries.fromEntries)),
    });
}
function useCaseInstances(useCases, repositories) {
    return pipe.pipe(useCases, entries.entries, map.map(([key, useCase]) => entry.entry(uncapitalize.uncapitalize(key), useCase.getUseCase(repositories))), fromEntries.fromEntries);
}

exports.createUseCase = createUseCase;
exports.useCaseHandlerKind = useCaseHandlerKind;
exports.useCaseInstances = useCaseInstances;
