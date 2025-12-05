import { type EligibleEqual, type MaybeArray } from "../common";
import { type UnFlatObject, type FlatObject } from "./types";
import { type GetPropsWithValueExtends } from "./types/getPropsWithValueExtends";
type ObjectProjection<GenericInput extends object> = FlatObject<GenericInput> extends infer InferredResult extends object ? Omit<Pick<InferredResult, GetPropsWithValueExtends<InferredResult, EligibleEqual>>, `${string}[${string}]${string}`> : never;
export declare function deepDiscriminate<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection, GenericValue extends EligibleEqual>(path: GenericPath, value: (MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)): (input: GenericInput) => input is Extract<GenericInput, UnFlatObject<{
    [Prop in GenericPath]: GenericValue;
}>>;
export declare function deepDiscriminate<GenericInput extends object, GenericObjectProjection extends ObjectProjection<GenericInput>, GenericPath extends keyof GenericObjectProjection, GenericValue extends EligibleEqual>(input: GenericInput, path: GenericPath, value: (MaybeArray<(GenericValue & GenericObjectProjection[GenericPath])> | MaybeArray<GenericObjectProjection[GenericPath]>)): input is Extract<GenericInput, UnFlatObject<{
    [Prop in GenericPath]: GenericValue;
}>>;
export {};
