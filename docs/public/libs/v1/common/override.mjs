import { createGlobalStore } from './globalStore.mjs';
import { pipe } from './pipe.mjs';
import './stringToBytes.mjs';
import './stringToMillisecond.mjs';
import { map } from '../array/map.mjs';
import './builder.mjs';
import '../either/bool/falsy.mjs';
import '../either/bool/truthy.mjs';
import '../either/bool/base.mjs';
import '../either/left/create.mjs';
import '../either/left/error.mjs';
import '../either/left/fail.mjs';
import '../either/kind.mjs';
import '../either/right/success.mjs';
import '../either/right/create.mjs';
import '../either/right/ok.mjs';
import '../either/future/success.mjs';
import '../either/future/error.mjs';
import '../either/future/base.mjs';
import '../either/nullable/empty.mjs';
import '../either/nullable/filled.mjs';
import '../either/nullable/base.mjs';
import '../either/nullish/empty.mjs';
import '../either/nullish/filled.mjs';
import '../either/nullish/base.mjs';
import '../either/optional/empty.mjs';
import '../either/optional/filled.mjs';
import '../either/optional/base.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
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
