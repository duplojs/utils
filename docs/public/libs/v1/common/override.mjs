import { createGlobalStore } from './globalStore.mjs';
import { pipe } from './pipe.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { map } from '../array/map.mjs';
import { entry } from '../object/entry.mjs';

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");
const overrideStore = createGlobalStore(SymbolOverrideStore, {});
function createOverride(overrideName) {
    const store = overrideStore.value[overrideName] ?? [];
    overrideStore.set({
        ...overrideStore.value,
        [overrideName]: store,
    });
    return {
        setMethod(prop, theFunction) {
            store.push([prop, theFunction]);
        },
        setPropertyDefaultValue(prop, value) {
            store.push([prop, value]);
        },
        apply(overrideInterface) {
            const self = {
                ...overrideInterface,
                ...pipe(store, map(([key, value]) => entry(key, typeof value === "function"
                    ? (...args) => value(self, ...args)
                    : value)), fromEntries),
            };
            return self;
        },
    };
}

export { createOverride };
