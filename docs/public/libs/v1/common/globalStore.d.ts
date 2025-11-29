export interface GlobalStore {
}
export interface GlobalStoreHandler<GenericValue extends unknown> {
    readonly value: GenericValue;
    set(value: GenericValue): void;
}
export declare function createGlobalStore<GenericStoreName extends keyof GlobalStore>(storeName: GenericStoreName, defaultValue: GlobalStore[GenericStoreName]): GlobalStoreHandler<GlobalStore[GenericStoreName]>;
