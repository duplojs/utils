import { type Kind, type KindHandler } from "./kind";
import { type AnyTuple } from "./types";
export declare function hasSomeKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(kinds: GenericKindHandlers): (input: GenericInput) => input is Extract<GenericInput, GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>;
export declare function hasSomeKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(input: GenericInput, kinds: GenericKindHandlers): input is Extract<GenericInput, GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>;
