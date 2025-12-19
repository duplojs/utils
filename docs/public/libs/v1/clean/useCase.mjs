import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { map } from '../array/map.mjs';
import { entry } from '../object/entry.mjs';
import { uncapitalize } from '../string/uncapitalize.mjs';
import { entries } from '../object/entries.mjs';
import { fromEntries } from '../object/fromEntries.mjs';

const useCaseHandlerKind = createCleanKind("use-case-handler");
function createUseCase(dependencies, getUseCase) {
    return useCaseHandlerKind.setTo({
        dependencies,
        getUseCase: (repositories) => getUseCase(pipe(dependencies, entries, map(([key, value]) => entry(uncapitalize(key), useCaseHandlerKind.has(value)
            ? value.getUseCase(repositories)
            : repositories[key])), fromEntries)),
    });
}
function useCaseInstances(useCases, repositories) {
    return pipe(useCases, entries, map(([key, useCase]) => entry(uncapitalize(key), useCase.getUseCase(repositories))), fromEntries);
}

export { createUseCase, useCaseHandlerKind, useCaseInstances };
