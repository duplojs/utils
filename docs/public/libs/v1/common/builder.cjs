'use strict';

var globalStore = require('./globalStore.cjs');
var kind = require('./kind.cjs');
var wrapValue = require('./wrapValue.cjs');
var unwrap = require('./unwrap.cjs');
var errorKindNamespace = require('./errorKindNamespace.cjs');

const SymbolBuilderStore = Symbol.for("@duplojs/utils/builder");
const builderStore = globalStore.createGlobalStore(SymbolBuilderStore, {});
const createBuilderKind = kind.createKindNamespace(
// @ts-expect-error reserved kind
"DuplojsUtilsBuilder");
const builderKind = createBuilderKind("base");
const builderNextKind = createBuilderKind("next");
class MissingBuilderMethodsError extends kind.kindHeritage("missing-builder-methods-error", errorKindNamespace.createErrorKind("missing-builder-methods-error"), Error) {
    method;
    constructor(method) {
        super({}, [`Missing builder method: ${method}`]);
        this.method = method;
    }
}
/**
 * {@include common/builder/index.md}
 */
function createBuilder(builderName) {
    const store = builderStore.value[builderName] ?? {};
    builderStore.set({
        ...builderStore.value,
        [builderName]: store,
    });
    const builderHandler = {
        set(method, theFunction) {
            store[method] = theFunction;
            return builderHandler;
        },
        use(accumulator) {
            return new Proxy(builderKind.addTo(store, accumulator), {
                get(target, prop) {
                    if (prop === builderKind.runTimeKey) {
                        return target[prop];
                    }
                    if (!target[prop]) {
                        throw new MissingBuilderMethodsError(prop);
                    }
                    const theFunction = target[prop];
                    return (...args) => {
                        const result = theFunction({
                            args,
                            accumulator,
                            next: (newAccumulator) => builderNextKind.addTo(wrapValue.wrapValue(newAccumulator)),
                        });
                        if (builderNextKind.has(result)) {
                            return builderHandler.use(unwrap.unwrap(result));
                        }
                        return result;
                    };
                },
            });
        },
    };
    return builderHandler;
}

exports.MissingBuilderMethodsError = MissingBuilderMethodsError;
exports.builderKind = builderKind;
exports.createBuilder = createBuilder;
