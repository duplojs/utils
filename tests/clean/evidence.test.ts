import { DClean, pipe, type ExpectType } from "@scripts";

describe("appendEvidence", () => {
	it("appends an evidence entry on a clean input", () => {
		const input = DClean.String.createOrThrow("hello");
		const result = DClean.appendEvidence(input, "validated");

		expect(DClean.evidenceKind.has(result)).toBe(true);
		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			validated: null,
		});

		type Check = ExpectType<
			typeof result,
			typeof input & DClean.Evidence<"validated">,
			"strict"
		>;
	});

	it("merges new evidence with existing evidence entries", () => {
		const input = DClean.String.createOrThrow("hello");
		const withFirstEvidence = DClean.appendEvidence(input, "parsed");
		const result = DClean.appendEvidence(withFirstEvidence, "checked");

		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			parsed: null,
			checked: null,
		});

		type Check = ExpectType<
			typeof result,
			typeof withFirstEvidence & DClean.Evidence<"checked">,
			"strict"
		>;
	});

	it("works with pipe using the curried overload", () => {
		const input = DClean.String.createOrThrow("hello");
		const result = pipe(
			input,
			DClean.appendEvidence("from-pipe"),
		);

		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			"from-pipe": null,
		});

		type Check = ExpectType<
			typeof result,
			typeof input & DClean.Evidence<"from-pipe">,
			"strict"
		>;
	});
});
