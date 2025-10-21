export declare function createExternalPromise<GenericPromiseValue extends unknown>(): {
    resolve: (_value: GenericPromiseValue | Awaited<GenericPromiseValue> | Promise<GenericPromiseValue>) => void;
    reject: (_value: unknown) => void;
    promise: Promise<Awaited<GenericPromiseValue>>;
};
