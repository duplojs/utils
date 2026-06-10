import { type UnionToIntersection, type AnyFunction, type AnyTuple, type GetKindValue, type Kind } from "../common";
import { type NewType } from "./newType";
import { type Entity } from "./entity";
import { type Primitive } from "./primitive";
import { type ConstrainedType } from "./constraint";
export declare const evidenceKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/evidence", Record<string, unknown>>>;
export interface Evidence<GenericName extends string = string> extends Kind<typeof evidenceKind.definition, Record<GenericName, unknown>> {
}
export type AppendEvidenceInput = ((Primitive | ConstrainedType | NewType<string, any, any> | Entity) & (Evidence | {}));
export declare function appendEvidence<GenericInput extends AppendEvidenceInput, GenericEvidenceName extends string>(input: GenericInput, evidenceName: GenericEvidenceName): GenericInput & Evidence<GenericEvidenceName>;
export declare function appendEvidence<GenericInput extends AppendEvidenceInput, GenericEvidenceName extends string>(evidenceName: GenericEvidenceName): (input: GenericInput) => GenericInput & Evidence<GenericEvidenceName>;
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
export type GetEvidenceResult<GenericFunction extends AnyFunction, EvidenceName extends Extract<keyof UnionToIntersection<GetKindValue<typeof evidenceKind, Extract<Awaited<ReturnType<GenericFunction>>, Evidence>>>, string>> = Extract<Awaited<ReturnType<GenericFunction>>, EvidenceName extends any ? Evidence<EvidenceName> : never>;
