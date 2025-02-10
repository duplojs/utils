import type { AnyFunction } from "./types";

export type AddThis<T extends AnyFunction, A extends unknown> = (this: A, ...args: Parameters<T>) => ReturnType<T>;
