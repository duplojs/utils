import { type IsEqual, type And, type Not, type AnyTuple, type Adaptor } from "../../common";
import type * as DString from "../../string";
import type * as DArray from "../../array";
interface FigureGreaterThanTable {
    "0": ["0", "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"];
    "1": ["1", "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"];
    "2": ["2", "3" | "4" | "5" | "6" | "7" | "8" | "9"];
    "3": ["3", "4" | "5" | "6" | "7" | "8" | "9"];
    "4": ["4", "5" | "6" | "7" | "8" | "9"];
    "5": ["5", "6" | "7" | "8" | "9"];
    "6": ["6", "7" | "8" | "9"];
    "7": ["7", "8" | "9"];
    "8": ["8", "9"];
    "9": ["9", ""];
}
type FigureGreaterThanTableValue = FigureGreaterThanTable[keyof FigureGreaterThanTable];
type CreateGreaterThanTable<GenericSplitReference extends AnyTuple<DString.Digit>> = GenericSplitReference extends [
    infer InferredFirst extends DString.Digit,
    ...infer InferredRest
] ? InferredRest extends readonly [] ? [FigureGreaterThanTable[InferredFirst]] : CreateGreaterThanTable<Adaptor<InferredRest, AnyTuple<DString.Digit>>> extends infer InferredRestResult extends AnyTuple<FigureGreaterThanTableValue> ? [FigureGreaterThanTable[InferredFirst], ...InferredRestResult] : never : never;
type CheckIsGreater<GreaterSplitValue extends AnyTuple<DString.Digit>, GreaterTableReference extends AnyTuple<FigureGreaterThanTableValue>> = GreaterSplitValue[0] extends GreaterTableReference[0][1] ? true : IsEqual<GreaterSplitValue[0], GreaterTableReference[0][0]> extends true ? IsEqual<GreaterSplitValue["length"], 1> extends true ? false : [
    DArray.ShiftTuple<GreaterSplitValue>,
    DArray.ShiftTuple<GreaterTableReference>
] extends [
    infer InferredRestSplitValue extends AnyTuple<DString.Digit>,
    infer InferredRestSplitReference extends AnyTuple<FigureGreaterThanTableValue>
] ? CheckIsGreater<InferredRestSplitValue, InferredRestSplitReference> : never : false;
export type IsGreater<GenericValue extends number, GenericReference extends number> = IsEqual<GenericValue, GenericReference> extends true ? true : [
    `${GenericValue}`,
    `${GenericReference}`
] extends [
    infer InferredValue extends DString.Number,
    infer InferredReference extends DString.Number
] ? And<[
    DString.Includes<InferredValue, "-">,
    Not<DString.Includes<InferredReference, "-">>
]> extends true ? false : And<[
    Not<DString.Includes<InferredValue, "-">>,
    DString.Includes<InferredReference, "-">
]> extends true ? true : ([
    DString.Split<DString.Replace<InferredValue, "-", "">, "">,
    DString.Split<DString.Replace<InferredReference, "-", "">, "">
] extends [
    infer InferredSplitValue extends AnyTuple<DString.Digit>,
    infer InferredSplitReference extends AnyTuple<DString.Digit>
] ? IsEqual<InferredSplitValue["length"], InferredSplitReference["length"]> extends true ? CheckIsGreater<InferredSplitValue, CreateGreaterThanTable<InferredSplitReference>> : DArray.CreateTuple<0, InferredSplitValue["length"]> extends [
    ...DArray.CreateTuple<0, InferredSplitReference["length"]>,
    ...0[]
] ? true : false : never) extends infer InferredResult extends boolean ? DString.Includes<InferredValue, "-"> extends true ? Not<InferredResult> : InferredResult : never : never;
export {};
