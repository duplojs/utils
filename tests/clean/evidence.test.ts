import { DClean, pipe, type ExpectType, when } from "@scripts";

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
			typeof input & DClean.Evidence<"parsed"> & DClean.Evidence<"checked">,
			"strict"
		>;
	});

	it("accepts a composed object as input", () => {
		const input = {
			user: DClean.String.createOrThrow("Ada"),
			roles: ["admin", "writer"] as const,
			metadata: {
				loadedAt: new Date("2026-06-14T00:00:00.000Z"),
			},
		};

		const result = DClean.appendEvidence(input, "loaded");

		expect(result).not.toBe(input);
		expect(result.user).toBe(input.user);
		expect(result.roles).toBe(input.roles);
		expect(result.metadata).toBe(input.metadata);
		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			loaded: null,
		});

		type Check = ExpectType<
			typeof result,
			typeof input & DClean.Evidence<"loaded">,
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

describe("hasEvidence", () => {
	it("checks if an evidence is present on the input", () => {
		const input = DClean.String.createOrThrow("hello");
		const withEvidence = DClean.appendEvidence(input, "validated");

		const result = DClean.hasEvidence(withEvidence, "validated");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof withEvidence,
				typeof input & DClean.Evidence<"validated">,
				"strict"
			>;
		}
	});

	it("returns false when the input has no evidence", () => {
		const input = DClean.String.createOrThrow("hello") as (
			| (DClean.String & DClean.Evidence<"validated">)
			| DClean.String
		);

		const result = DClean.hasEvidence(input, "validated");

		expect(result).toBe(false);
	});

	it("returns false when the requested evidence is missing", () => {
		const input = DClean.String.createOrThrow("hello");
		const withEvidence = DClean.appendEvidence(input, "parsed" as string);

		const result = DClean.hasEvidence(withEvidence, "validated");

		expect(result).toBe(false);
	});

	it("checks if some evidence from a list is present on the input", () => {
		const input = DClean.String.createOrThrow("hello");
		const withEvidence = DClean.appendEvidence(input, "parsed") as (
			| (DClean.String & DClean.Evidence<"validated">)
			| DClean.String & DClean.Evidence<"parsed">
		);

		const result = DClean.hasEvidence(
			withEvidence,
			["validated", "parsed"],
		);

		expect(result).toBe(true);
	});

	it("works in pipe with when", () => {
		const input = DClean.String.createOrThrow("hello");
		const withEvidence = DClean.appendEvidence(input, "from-pipe") as (
			| (DClean.String & DClean.Evidence<"validated">)
			| DClean.Primitive<"hello"> & DClean.Evidence<"from-pipe">
		);

		const result = pipe(
			withEvidence,
			when(
				DClean.hasEvidence("from-pipe"),
				(value) => {
					type check = ExpectType<
						typeof value,
						typeof input & DClean.Evidence<"from-pipe">,
						"strict"
					>;

					return true;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			boolean | (DClean.Primitive<string> & DClean.Evidence<"validated">),
			"strict"
		>;
	});
});
