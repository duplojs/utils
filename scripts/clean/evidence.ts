import { type UnionToIntersection, type AnyFunction, type AnyTuple, type GetKindValue, type Kind, type Unwrap, kindClass } from "@scripts/common";
import { createCleanKind } from "./kind";
import type * as DEither from "@scripts/either";

export const evidenceKind = createCleanKind<
	"evidence",
	Record<string, unknown>
>("evidence");

export interface Evidence<
	GenericName extends string = string,
> extends Kind<
	typeof evidenceKind.definition,
		Record<GenericName, unknown>
	> {

}

export class ArrayWithEvidence<
	GenericElement extends unknown = unknown,
	GenericEvidence extends string = string,
> extends kindClass(
		evidenceKind,
		Array,
	)<
		GenericElement[],
		Record<GenericEvidence, unknown>
	> {
	public constructor(
		array: readonly GenericElement[],
		evidence: Record<GenericEvidence, unknown>,
	) {
		super(evidence, ...array);
	}

	public static [Symbol.species] = Array;
}

/**
 * {@include clean/evidence/index.md}
 */
export function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string,
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & Evidence<GenericEvidenceName>;

export function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string,
>(
	evidenceName: GenericEvidenceName,
): (input: GenericInput) => GenericInput & Evidence<GenericEvidenceName>;

export function appendEvidence(
	...args: [object, string]
		| [string]
) {
	if (args.length === 1) {
		const [evidenceName] = args;
		return (input: object) => appendEvidence(input, evidenceName);
	}

	const [input, evidenceName] = args;
	const evidence = {
		...(evidenceKind.has(input) && evidenceKind.getValue(input) as {}),
		[evidenceName]: null,
	};

	if (input instanceof Array) {
		return new ArrayWithEvidence(input, evidence);
	}

	return evidenceKind.addTo(
		input,
		evidence,
	);
}

/**
 * {@include clean/hasEvidence/index.md}
 */
export function hasEvidence<
	GenericInput extends unknown,
	GenericEvidenceName extends Extract<
		keyof UnionToIntersection<
			GetKindValue<
				typeof evidenceKind,
				Extract<GenericInput, Evidence>
			>
		>,
		string
	>,
>(
	evidenceName: GenericEvidenceName | AnyTuple<GenericEvidenceName>
): (input: GenericInput) => input is Extract<
	GenericInput,
	GenericEvidenceName extends any
		? Evidence<GenericEvidenceName>
		: never
>;

export function hasEvidence<
	GenericInput extends unknown,
	GenericEvidenceName extends Extract<
		keyof UnionToIntersection<
			GetKindValue<
				typeof evidenceKind,
				Extract<GenericInput, Evidence>
			>
		>,
		string
	>,
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName | AnyTuple<GenericEvidenceName>
): input is Extract<
	GenericInput,
	GenericEvidenceName extends any
		? Evidence<GenericEvidenceName>
		: never
>;

export function hasEvidence(
	...args: [unknown, string | AnyTuple<string>] | [string | AnyTuple<string>]
): any {
	if (args.length === 1) {
		const [evidenceName] = args;
		return (input: unknown) => hasEvidence(input, evidenceName as never);
	}

	const [input, evidenceName] = args;
	if (!evidenceKind.has(input)) {
		return false;
	}

	const formattedEvidenceName = evidenceName instanceof Array
		? evidenceName
		: [evidenceName];
	const evidence = evidenceKind.getValue(input);

	for (const name of formattedEvidenceName) {
		if (name in evidence) {
			return true;
		}
	}

	return false;
}

export type GetEvidenceResult<
	GenericFunction extends AnyFunction,
	EvidenceName extends Extract<
		keyof UnionToIntersection<
			GetKindValue<
				typeof evidenceKind,
				Extract<
					Awaited<ReturnType<GenericFunction>> extends infer InferredResult
						? InferredResult extends Evidence
							? InferredResult
							: InferredResult extends DEither.Right | DEither.Left
								? Unwrap<InferredResult>
								: InferredResult
						: never,
					Evidence
				>
			>
		>,
		string
	>,
> = Extract<
	Awaited<ReturnType<GenericFunction>> extends infer InferredResult
		? InferredResult extends Evidence
			? InferredResult
			: InferredResult extends DEither.Right | DEither.Left
				? Unwrap<InferredResult>
				: InferredResult
		: never,
	EvidenceName extends any
		? Evidence<EvidenceName>
		: never
>;
