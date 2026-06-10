import { type UnionToIntersection, type AnyFunction, type AnyTuple, type GetKindValue, type Kind } from "@scripts/common";
import { createCleanKind } from "./kind";
import { type NewType } from "./newType";
import { type Entity } from "./entity";
import { type Primitive } from "./primitive";
import { type ConstrainedType } from "./constraint";

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

export type AppendEvidenceInput = (
	& (
		| Primitive
		| ConstrainedType
		| NewType<string, any, any>
		| Entity
	)
	& (
		| Evidence
		| {}
	)
);

export function appendEvidence<
	GenericInput extends AppendEvidenceInput,
	GenericEvidenceName extends string,
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & Evidence<GenericEvidenceName>;

export function appendEvidence<
	GenericInput extends AppendEvidenceInput,
	GenericEvidenceName extends string,
>(
	evidenceName: GenericEvidenceName,
): (input: GenericInput) => GenericInput & Evidence<GenericEvidenceName>;

export function appendEvidence(
	...args: [AppendEvidenceInput, string]
		| [string]
) {
	if (args.length === 1) {
		const [evidenceName] = args;
		return (input: AppendEvidenceInput) => appendEvidence(input, evidenceName);
	}

	const [input, evidenceName] = args;
	const evidence = {
		...(evidenceKind.has(input) && evidenceKind.getValue(input)),
		[evidenceName]: null,
	};

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
					Awaited<ReturnType<GenericFunction>>,
					Evidence
				>
			>
		>,
		string
	>,
> = Extract<
	Awaited<ReturnType<GenericFunction>>,
	EvidenceName extends any
		? Evidence<EvidenceName>
		: never
>;
