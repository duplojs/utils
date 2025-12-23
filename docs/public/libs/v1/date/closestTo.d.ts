import type { TheDate } from "./types";
interface ClosestToParams {
    tieBreaker?: "favorPast" | "favorFuture";
}
export declare function closestTo<GenericIterable extends Iterable<TheDate>>(target: TheDate, params?: ClosestToParams): (input: GenericIterable) => TheDate | undefined;
export declare function closestTo<GenericIterable extends Iterable<TheDate>>(input: GenericIterable, target: TheDate, params?: ClosestToParams): TheDate | undefined;
export {};
