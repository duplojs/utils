import { type Kind } from "@scripts/common";
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
