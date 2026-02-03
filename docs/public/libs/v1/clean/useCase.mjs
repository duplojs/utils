import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { map } from '../array/map.mjs';
import { entry } from '../object/entry.mjs';
import { uncapitalize } from '../string/uncapitalize.mjs';
import { entries } from '../object/entries.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { createOverride } from '../common/override.mjs';

const useCaseHandlerKind = createCleanKind("use-case-handler");
/**
 * {@include clean/createUseCase/index.md}
 */
function createUseCase(dependencies, getUseCase) {
    return pipe({
        dependencies,
        getUseCase: (injectedDependencies) => getUseCase(pipe(dependencies, entries, map(([key, value]) => {
            const formattedKey = uncapitalize(key);
            return entry(formattedKey, useCaseHandlerKind.has(value) && !injectedDependencies[formattedKey]
                ? value.getUseCase(injectedDependencies)
                : injectedDependencies[formattedKey]);
        }), fromEntries)),
    }, useCaseHandlerKind.setTo, createUseCase.overrideHandler.apply);
}
createUseCase.overrideHandler = createOverride("@duplojs/utils/clean/use-case");
/**
 * {@include clean/useCaseInstances/index.md}
 */
function useCaseInstances(useCases, repositories) {
    return pipe(useCases, entries, map(([key, useCase]) => entry(uncapitalize(key), useCase.getUseCase(repositories))), fromEntries);
}

export { createUseCase, useCaseHandlerKind, useCaseInstances };
