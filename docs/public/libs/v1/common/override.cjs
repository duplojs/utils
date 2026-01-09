'use strict';

var globalStore = require('./globalStore.cjs');

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");
const overrideStore = globalStore.createGlobalStore(SymbolOverrideStore, {});
function createOverride(overrideName) {
    const OverrideConstructor = overrideStore.value[overrideName] ?? (class {
    });
    overrideStore.value[overrideName] ||= OverrideConstructor;
    return {
        setMethod(prop, theFunction) {
            OverrideConstructor.prototype[prop] = function (...args) {
                return theFunction(this, ...args);
            };
        },
        setPropertyDefaultValue(prop, value) {
            OverrideConstructor.prototype[prop] = value;
        },
        apply(toOverrideInterface) {
            const newInstance = new OverrideConstructor();
            for (const prop in toOverrideInterface) {
                newInstance[prop] = toOverrideInterface[prop];
            }
            return newInstance;
        },
    };
}

exports.createOverride = createOverride;
