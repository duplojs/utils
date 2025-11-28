'use strict';

var globalStore = require('./globalStore.cjs');
var pipe = require('./pipe.cjs');
require('./stringToBytes.cjs');
require('./stringToMillisecond.cjs');
var map = require('../array/map.cjs');
require('./builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../either/right/success.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
var fromEntries = require('../object/fromEntries.cjs');
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
