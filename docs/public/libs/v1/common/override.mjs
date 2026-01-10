import { createGlobalStore } from './globalStore.mjs';

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");
const overrideStore = createGlobalStore(SymbolOverrideStore, {});
function createOverride(overrideName) {
    const overridePropertiesStore = overrideStore.value[overrideName] ?? {};
    overrideStore.value[overrideName] ||= overridePropertiesStore;
    let cachedStoreKey = Object.keys(overridePropertiesStore);
    return {
        setMethod(prop, theFunction) {
            overridePropertiesStore[prop] = theFunction;
            cachedStoreKey = Object.keys(overridePropertiesStore);
        },
        setPropertyDefaultValue(prop, value) {
            overridePropertiesStore[prop] = value;
            cachedStoreKey = Object.keys(overridePropertiesStore);
        },
        apply(overrideInterface) {
            const cachedOverrideProperties = {};
            const self = new Proxy({}, {
                get(target, prop) {
                    if (overridePropertiesStore[prop]) {
                        if (!cachedOverrideProperties[prop]) {
                            cachedOverrideProperties[prop] = typeof overridePropertiesStore[prop] === "function"
                                ? (...args) => overridePropertiesStore[prop](self, ...args)
                                : overridePropertiesStore[prop];
                        }
                        return cachedOverrideProperties[prop];
                    }
                    return overrideInterface[prop];
                },
                ownKeys() {
                    return [
                        ...Object.keys(overrideInterface),
                        ...cachedStoreKey,
                    ];
                },
                has(target, prop) {
                    return Object.keys(overrideInterface).includes(prop)
                        || cachedStoreKey.includes(prop);
                },
                getOwnPropertyDescriptor() {
                    return {
                        enumerable: true,
                        configurable: true,
                    };
                },
            });
            return self;
        },
    };
}

export { createOverride };
