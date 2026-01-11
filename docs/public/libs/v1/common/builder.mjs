import { createGlobalStore } from './globalStore.mjs';
import { createKindNamespace, kindHeritage } from './kind.mjs';
import { wrapValue } from './wrapValue.mjs';
import { unwrap } from './unwrap.mjs';
import { createErrorKind } from './errorKindNamespace.mjs';

const SymbolBuilderStore = Symbol.for("@duplojs/utils/builder");
const builderStore = createGlobalStore(SymbolBuilderStore, {});
const createBuilderKind = createKindNamespace(
// @ts-expect-error reserved kind
"DuplojsUtilsBuilder");
const builderKind = createBuilderKind("base");
const builderNextKind = createBuilderKind("next");
class MissingBuilderMethodsError extends kindHeritage("missing-builder-methods-error", createErrorKind("missing-builder-methods-error"), Error) {
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
                            next: (newAccumulator) => builderNextKind.addTo(wrapValue(newAccumulator)),
                        });
                        if (builderNextKind.has(result)) {
                            return builderHandler.use(unwrap(result));
                        }
                        return result;
                    };
                },
            });
        },
    };
    return builderHandler;
}

export { MissingBuilderMethodsError, builderKind, createBuilder };
