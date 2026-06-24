import { DClean, DEither, pipe, type ExpectType, when } from "@scripts";

describe("ArrayWithEvidence", () => {
	it("behaves like an array and exposes its evidence", () => {
		const input = new DClean.ArrayWithEvidence(
			[1, 2, 3],
			{ validated: null },
		);

		expect(Array.isArray(input)).toBe(true);
		expect(input).toBeInstanceOf(Array);
		expect(input).toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(input.length).toBe(3);
		expect([...input]).toStrictEqual([1, 2, 3]);
		expect(DClean.evidenceKind.getValue(input)).toStrictEqual({
			validated: null,
		});

		type Check = ExpectType<
			typeof input,
			DClean.ArrayWithEvidence<number, "validated">,
			"strict"
		>;
	});

	it("supports mutating array operations while retaining its evidence", () => {
		const input = new DClean.ArrayWithEvidence(
			[2, 3],
			{ validated: null },
		);

		input.unshift(1);
		input.push(5);
		const removed = input.splice(3, 0, 4);
		input.reverse();
		input.sort((left, right) => left - right);

		expect(removed).toStrictEqual([]);
		expect(Array.from(input)).toStrictEqual([1, 2, 3, 4, 5]);
		expect(DClean.evidenceKind.getValue(input)).toStrictEqual({
			validated: null,
		});

		type Check = ExpectType<
			typeof removed,
			number[],
			"strict"
		>;
	});

	it("supports array operations that create native arrays", () => {
		const input = new DClean.ArrayWithEvidence(
			[1, 2, 3, 4],
			{ validated: null },
		);

		const mapped = input.map((value) => value * 2);
		const filtered = input.filter((value) => value % 2 === 0);
		const sliced = input.slice(1, 3);
		const concatenated = input.concat([5, 6]);

		expect(mapped).toStrictEqual([2, 4, 6, 8]);
		expect(filtered).toStrictEqual([2, 4]);
		expect(sliced).toStrictEqual([2, 3]);
		expect(concatenated).toStrictEqual([1, 2, 3, 4, 5, 6]);
		expect(mapped).not.toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(filtered).not.toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(sliced).not.toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(concatenated).not.toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(DClean.evidenceKind.has(mapped)).toBe(false);
		expect(DClean.evidenceKind.has(filtered)).toBe(false);
		expect(DClean.evidenceKind.has(sliced)).toBe(false);
		expect(DClean.evidenceKind.has(concatenated)).toBe(false);
		expect(Array.from(input)).toStrictEqual([1, 2, 3, 4]);

		type MappedCheck = ExpectType<
			typeof mapped,
			number[],
			"strict"
		>;
		type FilteredCheck = ExpectType<
			typeof filtered,
			number[],
			"strict"
		>;
		type SlicedCheck = ExpectType<
			typeof sliced,
			number[],
			"strict"
		>;
		type ConcatenatedCheck = ExpectType<
			typeof concatenated,
			number[],
			"strict"
		>;
	});

	it("supports iteration and aggregation operations", () => {
		const input = new DClean.ArrayWithEvidence(
			[1, 2, 3],
			{ validated: null },
		);

		const values = Array.from(input.values());
		const found = input.find((value) => value > 1);
		const includes = input.includes(2);
		const sum = input.reduce((total, value) => total + value, 0);

		expect(values).toStrictEqual([1, 2, 3]);
		expect(found).toBe(2);
		expect(includes).toBe(true);
		expect(sum).toBe(6);

		type ValuesCheck = ExpectType<
			typeof values,
			number[],
			"strict"
		>;
		type FoundCheck = ExpectType<
			typeof found,
			number | undefined,
			"strict"
		>;
		type IncludesCheck = ExpectType<
			typeof includes,
			boolean,
			"strict"
		>;
		type SumCheck = ExpectType<
			typeof sum,
			number,
			"strict"
		>;
	});
});

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

	it("clones an array without mutating it or adding the evidence name as a property", () => {
		const input = [1, 2, 3];
		const result = DClean.appendEvidence(input, "validated");

		expect(result).toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(result).not.toBe(input);
		expect(Array.from(result)).toStrictEqual(input);
		expect("validated" in result).toBe(false);
		expect(DClean.evidenceKind.has(input)).toBe(false);
		expect(DClean.evidenceKind.has(result)).toBe(true);
		expect(Object.keys(input)).toStrictEqual(["0", "1", "2"]);
		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			validated: null,
		});

		result.push(4);

		expect(input).toStrictEqual([1, 2, 3]);

		type Check = ExpectType<
			typeof result,
			number[] & DClean.Evidence<"validated">,
			"strict"
		>;
	});

	it("clones a readonly tuple while preserving its type", () => {
		const input = ["Ada", 36] as const;
		const result = DClean.appendEvidence(input, "loaded");

		expect(result).toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(result).not.toBe(input);
		expect(Array.from(result)).toStrictEqual(["Ada", 36]);
		expect(DClean.evidenceKind.has(input)).toBe(false);
		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			loaded: null,
		});

		type Check = ExpectType<
			typeof result,
			typeof input & DClean.Evidence<"loaded">,
			"strict"
		>;
	});

	it("clones an ArrayWithEvidence and merges its evidence entries", () => {
		const input = new DClean.ArrayWithEvidence(
			["admin", "writer"],
			{ parsed: null },
		);
		const result = DClean.appendEvidence(input, "checked");

		expect(result).toBeInstanceOf(DClean.ArrayWithEvidence);
		expect(result).not.toBe(input);
		expect(Array.from(result)).toStrictEqual(["admin", "writer"]);
		expect(DClean.evidenceKind.getValue(input)).toStrictEqual({
			parsed: null,
		});
		expect(DClean.evidenceKind.getValue(result)).toStrictEqual({
			parsed: null,
			checked: null,
		});

		type Check = ExpectType<
			typeof result,
			typeof input & DClean.Evidence<"checked">,
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

describe("evidenceResult", () => {
	it("creates a result with the provided information and an evidenced value", () => {
		const input = {
			id: 1,
			name: "Ada",
		};

		const result = DClean.evidenceResult("created", input);
		const value = DEither.unwrapRightOrThrow(result);

		expect(DEither.resultKind.has(result)).toBe(true);
		expect(DEither.hasInformation(result, "created")).toBe(true);
		expect(value).not.toBe(input);
		expect(value.id).toBe(1);
		expect(value.name).toBe("Ada");
		expect(DClean.evidenceKind.getValue(value)).toStrictEqual({
			created: null,
		});

		type ResultCheck = ExpectType<
			typeof result,
			DClean.EvidenceResult<"created", typeof input>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			typeof input & DClean.Evidence<"created">,
			"strict"
		>;
	});

	it("keeps existing evidence while adding the result information as evidence", () => {
		const input = DClean.appendEvidence(
			{
				userId: "user-1",
			},
			"parsed",
		);

		const result = DClean.evidenceResult("validated", input);
		const value = DEither.unwrapRightOrThrow(result);

		expect(DEither.hasInformation(result, "validated")).toBe(true);
		expect(DClean.evidenceKind.getValue(value)).toStrictEqual({
			parsed: null,
			validated: null,
		});

		type ResultCheck = ExpectType<
			typeof result,
			DClean.EvidenceResult<"validated", typeof input>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			typeof input & DClean.Evidence<"validated">,
			"strict"
		>;
	});

	it("works in a pipe chain", () => {
		const input = {
			email: "ada@example.com",
		};

		const result = pipe(
			input,
			(value) => DClean.evidenceResult("loaded", value),
		);
		const value = DEither.unwrapRightOrThrow(result);

		expect(DEither.hasInformation(result, "loaded")).toBe(true);
		expect(DClean.evidenceKind.getValue(value)).toStrictEqual({
			loaded: null,
		});

		type ResultCheck = ExpectType<
			typeof result,
			DClean.EvidenceResult<"loaded", typeof input>,
			"strict"
		>;
		type ValueCheck = ExpectType<
			typeof value,
			typeof input & DClean.Evidence<"loaded">,
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
