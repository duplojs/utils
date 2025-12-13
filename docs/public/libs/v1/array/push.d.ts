export declare function push<GenericElement extends unknown>(item: NoInfer<GenericElement>): (input: readonly GenericElement[]) => GenericElement[];
export declare function push<GenericElement extends unknown>(input: readonly GenericElement[], item: NoInfer<GenericElement>, ...items: NoInfer<GenericElement>[]): GenericElement[];
