import { type String } from "../../base";
export declare function concat(text: String | string): (input: String) => String;
export declare function concat(input: String, ...textsRest: (String | string)[]): String;
