import { DDataParser, type ExpectType } from "@scripts";
import { findRecordRequiredKeyOnTemplateLiteralPart } from "@scripts/dataParser/parsers/record/findRecordRequiredKey";

describe("findRecordRequiredKey", () => {
	it("returns null for string key parser", () => {
		const keyParser = DDataParser.string();

		expect(DDataParser.findRecordRequiredKey(keyParser)).toBeNull();
	});

	it("returns all combinations for template literal key parser", () => {
		const keyParser = DDataParser.templateLiteral([
			"status-",
			DDataParser.boolean(),
			"-",
			DDataParser.literal(["ok", "ko"]),
		]);

		expect(DDataParser.findRecordRequiredKey(keyParser)).toStrictEqual([
			"status-true-ok",
			"status-true-ko",
			"status-false-ok",
			"status-false-ko",
		]);
	});

	it("returns literal options converted to strings", () => {
		const keyParser = DDataParser.literal(["foo", 42, 12n]);

		expect(DDataParser.findRecordRequiredKey(keyParser)).toStrictEqual([
			"foo",
			"42",
			"12n",
		]);
	});

	it("returns null for number key parser with coercion", () => {
		const keyParser = DDataParser.number({ coerce: true });

		expect(DDataParser.findRecordRequiredKey(keyParser)).toBeNull();
	});

	it("flattens union when every option resolves to concrete keys", () => {
		const literalKey = DDataParser.literal(["foo"]);
		const templateKey = DDataParser.templateLiteral([
			"bar-",
			DDataParser.literal(["a", "b"]),
		]);

		const keyParser = DDataParser.union([
			literalKey,
			templateKey,
		]);

		expect(DDataParser.findRecordRequiredKey(keyParser)).toStrictEqual([
			"foo",
			"bar-a",
			"bar-b",
		]);
	});

	it("returns null for union when at least one option is unbounded", () => {
		const keyParser = DDataParser.union([
			DDataParser.literal(["foo"]),
			DDataParser.string(),
		]);

		expect(DDataParser.findRecordRequiredKey(keyParser)).toBeNull();
	});
});

describe("findRecordRequiredKeyOnTemplateLiteralPart", () => {
	it("handles primitive string part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart(["segment"]);

		expect(result).toStrictEqual(["segment"]);
	});

	it("handles primitive number part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([12]);

		expect(result).toStrictEqual(["12"]);
	});

	it("handles primitive bigint part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([12n]);

		expect(result).toStrictEqual(["12n"]);
	});

	it("handles primitive boolean part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([true]);

		expect(result).toStrictEqual(["true"]);
	});

	it("handles primitive null part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([null]);

		expect(result).toStrictEqual(["null"]);
	});

	it("handles primitive undefined part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([undefined]);

		expect(result).toStrictEqual(["undefined"]);
	});

	it("handles string parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.email()]);

		expect(result).toBeNull();
	});

	it("handles number parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.number()]);

		expect(result).toBeNull();
	});

	it("handles bigint parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.bigint()]);

		expect(result).toBeNull();
	});

	it("handles boolean parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.boolean()]);

		expect(result).toStrictEqual(["true", "false"]);
	});

	it("handles literal parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.literal(["foo", 1, 12n])]);

		expect(result).toStrictEqual(["foo", "1", "12n"]);
	});

	it("handles empty parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.empty()]);

		expect(result).toStrictEqual(["undefined"]);
	});

	it("handles nil parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.nil()]);

		expect(result).toStrictEqual(["null"]);
	});

	it("handles template literal parser part", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([
			DDataParser.templateLiteral([
				"prefix-",
				DDataParser.literal(["x", "y"]),
			]),
		]);

		expect(result).toStrictEqual(["prefix-x", "prefix-y"]);
	});

	it("handles union parser part with finite options", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([DDataParser.union([DDataParser.literal(["union"])])]);

		expect(result).toStrictEqual(["union"]);
	});

	it("handles union parser part with unbounded option", () => {
		const result = findRecordRequiredKeyOnTemplateLiteralPart([
			DDataParser.union([
				DDataParser.literal(["union"]),
				DDataParser.email(),
			]),
		]);

		expect(result).toBeNull();
	});

	it("computes every combination for nested template literal structure", () => {
		const nestedSegment = DDataParser.templateLiteral([
			"nested-",
			DDataParser.literal(["x", "y"]),
		]);

		const unionSegment = DDataParser.union([
			DDataParser.literal(["tail"]),
			DDataParser.templateLiteral([
				"t",
				DDataParser.literal(["1", "2"]),
			]),
		]);

		const schema = DDataParser.templateLiteral([
			"prefix-",
			DDataParser.boolean(),
			"-",
			DDataParser.literal(["ok", 1]),
			DDataParser.nil(),
			"-",
			nestedSegment,
			"-",
			unionSegment,
		]);

		const result = findRecordRequiredKeyOnTemplateLiteralPart(schema.definition.template);

		const expectedResult = [
			"prefix-true-oknull-nested-x-tail",
			"prefix-true-oknull-nested-x-t1",
			"prefix-true-oknull-nested-x-t2",
			"prefix-true-oknull-nested-y-tail",
			"prefix-true-oknull-nested-y-t1",
			"prefix-true-oknull-nested-y-t2",
			"prefix-true-1null-nested-x-tail",
			"prefix-true-1null-nested-x-t1",
			"prefix-true-1null-nested-x-t2",
			"prefix-true-1null-nested-y-tail",
			"prefix-true-1null-nested-y-t1",
			"prefix-true-1null-nested-y-t2",
			"prefix-false-oknull-nested-x-tail",
			"prefix-false-oknull-nested-x-t1",
			"prefix-false-oknull-nested-x-t2",
			"prefix-false-oknull-nested-y-tail",
			"prefix-false-oknull-nested-y-t1",
			"prefix-false-oknull-nested-y-t2",
			"prefix-false-1null-nested-x-tail",
			"prefix-false-1null-nested-x-t1",
			"prefix-false-1null-nested-x-t2",
			"prefix-false-1null-nested-y-tail",
			"prefix-false-1null-nested-y-t1",
			"prefix-false-1null-nested-y-t2",
		] as const;

		expect(result).toStrictEqual(expectedResult);

		type Check = ExpectType<
			DDataParser.Output<typeof schema>,
			typeof expectedResult[number],
			"strict"
		>;
	});
});
