export type AnyConstructor<GenericArgs extends any[] = any[], GenericInstance extends any = any> = new (...args: GenericArgs) => GenericInstance;
