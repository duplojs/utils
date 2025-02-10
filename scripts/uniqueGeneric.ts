declare const unique: unique symbol;
export type UniqueGeneric<T extends unknown> = T & { [unique]?: typeof unique };
