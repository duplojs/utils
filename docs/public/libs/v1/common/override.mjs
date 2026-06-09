import { createGlobalStore } from './globalStore.mjs';

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");
const overrideStore = createGlobalStore(SymbolOverrideStore, {});
/**
 * {@include common/override/index.md}
 */
function createOverride(overrideName) {
    const overridePropertiesStore = overrideStore.value[overrideName] ?? {};
    overrideStore.value[overrideName] ||= overridePropertiesStore;
    return {
        setMethod(prop, theFunction) {
            overridePropertiesStore[prop] = theFunction;
        },
        setPropertyDefaultValue(prop, value) {
            overridePropertiesStore[prop] = value;
        },
        apply(overrideInterface) {
            const injectOverrideStoreFunction = overrideInterface[SymbolOverrideStore];
            if (injectOverrideStoreFunction) {
                injectOverrideStoreFunction(overridePropertiesStore);
                return overrideInterface;
            }
            const overrideStoreList = [overridePropertiesStore];
            const cachedOverrideProperties = {};
            function injectOverrideStore(overrideStore) {
                overrideStoreList.unshift(overrideStore);
            }
            const proxyHandler = {
                get(_target, prop) {
                    if (prop in overrideInterface) {
                        return overrideInterface[prop];
                    }
                    if (prop in cachedOverrideProperties) {
                        return cachedOverrideProperties[prop];
                    }
                    for (const overrideStore of overrideStoreList) {
                        if (prop in overrideStore) {
                            cachedOverrideProperties[prop] = typeof overridePropertiesStore[prop] === "function"
                                ? (...args) => overridePropertiesStore[prop](self, ...args)
                                : overridePropertiesStore[prop];
                            return cachedOverrideProperties[prop];
                        }
                    }
                    if (prop === SymbolOverrideStore) {
                        return injectOverrideStore;
                    }
                    return undefined;
                },
                ownKeys() {
                    const result = Object.keys(overrideInterface);
                    for (const overrideStore of overrideStoreList) {
                        for (const prop in overrideStore) {
                            if (!result.includes(prop)) {
                                result.push(prop);
                            }
                        }
                    }
                    return result;
                },
                has(_target, prop) {
                    if (prop in overrideInterface
                        || prop in cachedOverrideProperties) {
                        return true;
                    }
                    for (const overrideStore of overrideStoreList) {
                        if (prop in overrideStore) {
                            return true;
                        }
                    }
                    return false;
                },
                getOwnPropertyDescriptor(target, prop) {
                    return {
                        enumerable: true,
                        configurable: true,
                        value: proxyHandler.get(target, prop),
                    };
                },
            };
            const self = new Proxy(cachedOverrideProperties, proxyHandler);
            void ({ ...self });
            return self;
        },
    };
}

export { createOverride };
