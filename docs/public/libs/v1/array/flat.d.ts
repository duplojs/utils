export declare function flat(): <const GenericArray extends readonly unknown[]>(array: GenericArray) => FlatArray<GenericArray, 1>[];
export declare function flat<const Depth extends number>(depth: Depth): <const GenericArray extends readonly unknown[]>(array: GenericArray) => FlatArray<GenericArray, Depth>[];
export declare function flat<const GenericArray extends readonly unknown[], const Depth extends number>(array: GenericArray, depth: Depth): FlatArray<GenericArray, Depth>[];
export declare function flat<const GenericArray extends readonly unknown[]>(array: GenericArray): FlatArray<GenericArray, 1>[];
