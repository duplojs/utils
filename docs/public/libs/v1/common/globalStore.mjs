const SymbolGlobalStore = Symbol.for("@duplojs/utils/global-store");
const globalVar = Object;
Object.defineProperty(globalVar, SymbolGlobalStore, { value: globalVar[SymbolGlobalStore] ?? {} });
const store = globalVar[SymbolGlobalStore];
function createGlobalStore(storeName, defaultValue) {
    if (store[storeName] === undefined) {
        store[storeName] = defaultValue;
    }
    return {
        get value() {
            return store[storeName];
        },
        set(value) {
            store[storeName] = value;
        },
    };
}

export { createGlobalStore };
