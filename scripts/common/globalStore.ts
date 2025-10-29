export interface GlobalStore {

}

const SymbolGlobalStore = Symbol.for("@duplojs/utils/global-store");
type SymbolGlobalStore = typeof SymbolGlobalStore;

const globalVar = Object as unknown as Record<SymbolGlobalStore, GlobalStore>;

Object.defineProperty(
	globalVar,
	SymbolGlobalStore,
	{ value: globalVar[SymbolGlobalStore] ?? {} },
);

const store = globalVar[SymbolGlobalStore];

export interface GlobalStoreHandler<
	GenericValue extends unknown,
> {
	readonly value: GenericValue;
	set(value: GenericValue): void;
}

export function createGlobalStore<
	GenericStoreName extends keyof GlobalStore,
>(
	storeName: GenericStoreName,
	defaultValue: GlobalStore[GenericStoreName],
): GlobalStoreHandler<GlobalStore[GenericStoreName]> {
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

