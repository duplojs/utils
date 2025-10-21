type Sort = "asc" | "dsc";
export declare function sortNumber<GenericArray extends readonly number[]>(sort: Sort): (array: GenericArray) => number[];
export declare function sortNumber<GenericArray extends readonly number[]>(array: GenericArray, sort: Sort): number[];
export {};
