export declare function push<GenericElement extends unknown>(item: NoInfer<GenericElement>): (array: readonly GenericElement[]) => GenericElement[];
export declare function push<GenericElement extends unknown>(array: readonly GenericElement[], item: NoInfer<GenericElement>, ...items: NoInfer<GenericElement>[]): GenericElement[];
