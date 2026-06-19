import { type UnionToIntersection, type AnyFunction, type AnyTuple, type GetKindValue, type Kind, type Unwrap } from "../common";
import type * as DEither from "../either";
export declare const evidenceKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/evidence", Record<string, unknown>>>;
export interface Evidence<GenericName extends string = string> extends Kind<typeof evidenceKind.definition, Record<GenericName, unknown>> {
}
declare const ArrayWithEvidence_base: import("../common").KindClass<import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/evidence", Record<string, unknown>>>, ArrayConstructor>;
export declare class ArrayWithEvidence<GenericElement extends unknown = unknown, GenericEvidence extends string = string> extends ArrayWithEvidence_base<GenericElement[], Record<GenericEvidence, unknown>> {
    constructor(array: readonly GenericElement[], evidence: Record<GenericEvidence, unknown>);
    static [Symbol.species]: ArrayConstructor;
}
/**
 * Appends an evidence trait on an object value to mark that a business step was completed.
 * 
 * **Supported call styles:**
 * - Classic: `appendEvidence(input, evidenceName)` -> returns the input with the evidence trait
 * - Curried: `appendEvidence(evidenceName)` -> returns a function waiting for the input
 * 
 * Use it to enrich a clean value, an entity, or a composed result object with one or more named evidences across a workflow, while preserving the business properties of the input.
 * 
 * ```ts
 * const name = C.String.createOrThrow("Ada");
 * 
 * const withParsedEvidence = C.appendEvidence(name, "parsed");
 * // `withParsedEvidence` now carries the "parsed" evidence trait.
 * 
 * const withTwoEvidences = C.appendEvidence(withParsedEvidence, "validated");
 * // `withTwoEvidences` now carries both "parsed" and "validated" evidence traits.
 * 
 * const userResult = {
 * 	name,
 * 	permissions: ["read", "write"] as const,
 * };
 * 
 * const withLoadedEvidence = C.appendEvidence(userResult, "loaded");
 * // `withLoadedEvidence` keeps the full composed object type and carries "loaded".
 * 
 * const withPipeEvidence = pipe(
 * 	name,
 * 	C.appendEvidence("from-pipe"),
 * );
 * // `withPipeEvidence` now carries the "from-pipe" evidence trait.
 * ```
 * 
 * @remarks
 * - Useful to trace business processing steps by progressively attaching evidence traits, including on objects whose properties were computed together.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/evidence
 * 
 * @namespace C
 * 
 */
export declare function appendEvidence<GenericInput extends object, GenericEvidenceName extends string>(input: GenericInput, evidenceName: GenericEvidenceName): GenericInput & Evidence<GenericEvidenceName>;
export declare function appendEvidence<GenericInput extends object, GenericEvidenceName extends string>(evidenceName: GenericEvidenceName): (input: GenericInput) => GenericInput & Evidence<GenericEvidenceName>;
/**
 * Predicate that checks whether a clean value carries one of the requested evidence traits.
 * 
 * **Supported call styles:**
 * - Classic: `hasEvidence(input, evidenceName)` -> returns a type guard result
 * - Curried: `hasEvidence(evidenceName)` -> returns a predicate waiting for the input
 * 
 * Use it to verify that a value has passed a business step previously marked with `appendEvidence`. When the predicate succeeds, TypeScript narrows the input to the matching `Evidence<evidenceName>` branch.
 * 
 * ```ts
 * const name = C.String.createOrThrow("Ada");
 * 
 * const withParsedEvidence = C.appendEvidence(name, "parsed");
 * const withValidatedEvidence = C.appendEvidence(withParsedEvidence, "validated");
 * 
 * const parsedOrValidated:
 * 	| typeof withParsedEvidence
 * 	| typeof withValidatedEvidence = withValidatedEvidence;
 * 
 * if (C.hasEvidence(parsedOrValidated, "validated")) {
 * 	type check = ExpectType<
 * 		typeof parsedOrValidated,
 * 		typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
 * 		"strict"
 * 	>;
 * }
 * 
 * C.hasEvidence(withParsedEvidence, "parsed"); // true
 * 
 * const result = pipe(
 * 	withValidatedEvidence,
 * 	when(
 * 		C.hasEvidence("validated"),
 * 		(value) => {
 * 			type check = ExpectType<
 * 				typeof value,
 * 				typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
 * 				"strict"
 * 			>;
 * 
 * 			return value;
 * 		},
 * 	),
 * );
 * 
 * type checkResult = ExpectType<
 * 	typeof result,
 * 	typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * - Accepts one evidence name or a tuple of evidence names.
 * - The runtime check succeeds when at least one requested evidence is present.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/evidence
 * 
 * @namespace C
 * 
 */
export declare function hasEvidence<GenericInput extends unknown, GenericEvidenceName extends Extract<keyof UnionToIntersection<GetKindValue<typeof evidenceKind, Extract<GenericInput, Evidence>>>, string>>(evidenceName: GenericEvidenceName | AnyTuple<GenericEvidenceName>): (input: GenericInput) => input is Extract<GenericInput, GenericEvidenceName extends any ? Evidence<GenericEvidenceName> : never>;
export declare function hasEvidence<GenericInput extends unknown, GenericEvidenceName extends Extract<keyof UnionToIntersection<GetKindValue<typeof evidenceKind, Extract<GenericInput, Evidence>>>, string>>(input: GenericInput, evidenceName: GenericEvidenceName | AnyTuple<GenericEvidenceName>): input is Extract<GenericInput, GenericEvidenceName extends any ? Evidence<GenericEvidenceName> : never>;
export type GetEvidenceResult<GenericFunction extends AnyFunction, EvidenceName extends Extract<keyof UnionToIntersection<GetKindValue<typeof evidenceKind, Extract<Awaited<ReturnType<GenericFunction>> extends infer InferredResult ? InferredResult extends Evidence ? InferredResult : InferredResult extends DEither.Right | DEither.Left ? Unwrap<InferredResult> : InferredResult : never, Evidence>>>, string>> = Extract<Awaited<ReturnType<GenericFunction>> extends infer InferredResult ? InferredResult extends Evidence ? InferredResult : InferredResult extends DEither.Right | DEither.Left ? Unwrap<InferredResult> : InferredResult : never, EvidenceName extends any ? Evidence<EvidenceName> : never>;
export {};
