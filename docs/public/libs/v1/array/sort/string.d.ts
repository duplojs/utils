type Sort = "asc" | "dsc";
export declare function sortString<GenericArray extends readonly string[]>(sort: Sort): (array: GenericArray) => string[];
export declare function sortString<GenericArray extends readonly string[]>(array: GenericArray, sort: Sort): string[];
export {};
