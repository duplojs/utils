export type ObjectKey = keyof any;

export type ObjectEntry = [ObjectKey, any];

export type AnyFunction = (...args: any) => any;

export type MybePromise<T> = T | Promise<T>;
