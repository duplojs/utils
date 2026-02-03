'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var map = require('../array/map.cjs');
var entry = require('../object/entry.cjs');
var uncapitalize = require('../string/uncapitalize.cjs');
var entries = require('../object/entries.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var override = require('../common/override.cjs');

const useCaseHandlerKind = kind.createCleanKind("use-case-handler");
/**
 * {@include clean/createUseCase/index.md}
 */
function createUseCase(dependencies, getUseCase) {
    return pipe.pipe({
        dependencies,
        getUseCase: (injectedDependencies) => getUseCase(pipe.pipe(dependencies, entries.entries, map.map(([key, value]) => {
            const formattedKey = uncapitalize.uncapitalize(key);
            return entry.entry(formattedKey, useCaseHandlerKind.has(value) && !injectedDependencies[formattedKey]
                ? value.getUseCase(injectedDependencies)
                : injectedDependencies[formattedKey]);
        }), fromEntries.fromEntries)),
    }, useCaseHandlerKind.setTo, createUseCase.overrideHandler.apply);
}
createUseCase.overrideHandler = override.createOverride("@duplojs/utils/clean/use-case");
/**
 * {@include clean/useCaseInstances/index.md}
 */
function useCaseInstances(useCases, repositories) {
    return pipe.pipe(useCases, entries.entries, map.map(([key, useCase]) => entry.entry(uncapitalize.uncapitalize(key), useCase.getUseCase(repositories))), fromEntries.fromEntries);
}

exports.createUseCase = createUseCase;
exports.useCaseHandlerKind = useCaseHandlerKind;
exports.useCaseInstances = useCaseInstances;
