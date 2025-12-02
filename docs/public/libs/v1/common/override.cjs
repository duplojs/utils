'use strict';

var globalStore = require('./globalStore.cjs');
var pipe = require('./pipe.cjs');
var fromEntries = require('../object/fromEntries.cjs');
var map = require('../array/map.cjs');
var entry = require('../object/entry.cjs');

const SymbolOverrideStore = Symbol.for("@duplojs/utils/override");
const overrideStore = globalStore.createGlobalStore(SymbolOverrideStore, {});
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
                ...pipe.pipe(store, map.map(([key, value]) => entry.entry(key, typeof value === "function"
                    ? (...args) => value(self, ...args)
                    : value)), fromEntries.fromEntries),
            };
            return self;
        },
    };
}

exports.createOverride = createOverride;
