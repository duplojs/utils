import { C, pipe, type ExpectType, when } from "@scripts";

const name = C.String.createOrThrow("Ada");

const withParsedEvidence = C.appendEvidence(name, "parsed");
const withValidatedEvidence = C.appendEvidence(withParsedEvidence, "validated");

const parsedOrValidated:
	| typeof withParsedEvidence
	| typeof withValidatedEvidence = withValidatedEvidence;

if (C.hasEvidence(parsedOrValidated, "validated")) {
	type check = ExpectType<
		typeof parsedOrValidated,
		typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
		"strict"
	>;
}

C.hasEvidence(withParsedEvidence, "parsed"); // true

const result = pipe(
	withValidatedEvidence,
	when(
		C.hasEvidence("validated"),
		(value) => {
			type check = ExpectType<
				typeof value,
				typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
				"strict"
			>;

			return value;
		},
	),
);

type checkResult = ExpectType<
	typeof result,
	typeof name & C.Evidence<"parsed"> & C.Evidence<"validated">,
	"strict"
>;
