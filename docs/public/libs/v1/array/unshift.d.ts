export declare function unshift<GenericElement extends unknown>(element: NoInfer<GenericElement>): (array: readonly GenericElement[]) => GenericElement[];
export declare function unshift<GenericElement extends unknown>(array: readonly GenericElement[], element: NoInfer<GenericElement>, ...elements: NoInfer<GenericElement>[]): GenericElement[];
