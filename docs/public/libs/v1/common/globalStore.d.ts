export interface GlobalStore {
}
export interface GlobalStoreHandler<GenericValue extends unknown> {
    readonly value: GenericValue;
    set(value: GenericValue): void;
}
/**
 * The createGlobalStore() function lets you create a global store (singleton) shared across the entire process. It is useful for storing a mutable value accessible from any module without passing it as a parameter.
 * 
 * Signature: `createGlobalStore(storeName, defaultValue)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/globalStore
 * 
 */
export declare function createGlobalStore<GenericStoreName extends keyof GlobalStore>(storeName: GenericStoreName, defaultValue: GlobalStore[GenericStoreName]): GlobalStoreHandler<GlobalStore[GenericStoreName]>;
