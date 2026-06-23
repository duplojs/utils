import { DDataParser, type ExpectType } from "@scripts";

describe("createTemplateLiteralPattern", () => {
	it("creates pattern for primitive string", () => {
		const result = DDataParser.createTemplateLiteralPattern(["a.b"]);

		expect(result).toBe("(?:a\\.b)");
	});

	it("creates pattern for primitive number", () => {
		const result = DDataParser.createTemplateLiteralPattern([42]);

		expect(result).toBe("(?:42)");
	});

	it("creates number parser pattern for non-finite primitive numbers", () => {
		const pattern = DDataParser.createTemplateLiteralPattern([
			Number.NaN,
			"-",
			Infinity,
			"-",
			-Infinity,
		]);
		const regex = new RegExp(`^${pattern}$`);

		expect(pattern).toBe("(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))(?:\\-)(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))(?:\\-)(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))");
		expect(regex.test("1-2-3")).toBe(true);
		expect(regex.test("NaN-Infinity--Infinity")).toBe(false);
	});

	it("creates pattern for primitive null", () => {
		const result = DDataParser.createTemplateLiteralPattern([null]);

		expect(result).toBe("(?:null)");
	});

	it("creates pattern for primitive undefined", () => {
		const result = DDataParser.createTemplateLiteralPattern([undefined]);

		expect(result).toBe("(?:undefined)");
	});

	it("creates pattern for primitive bigint", () => {
		const result = DDataParser.createTemplateLiteralPattern([12n]);

		expect(result).toBe("(?:12n)");
	});

	it("creates pattern for primitive boolean", () => {
		const result = DDataParser.createTemplateLiteralPattern([true]);

		expect(result).toBe("(?:true)");
	});

	it("creates pattern for number parser", () => {
		const schema = DDataParser.number();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))");
	});

	it("matches TypeScript number template literal forms", () => {
		const schema = DDataParser.number();
		const pattern = new RegExp(`^${DDataParser.createTemplateLiteralPattern([schema])}$`);

		const validCases = [
			"12",
			"-15",
			"+12",
			"150.06",
			".5",
			"12.",
			"001",
			"1e3",
			"1E-3",
			"+1e+3",
			"0x10",
			"0b10",
			"0o10",
		] as const satisfies readonly `${number}`[];

		type _CheckValidCases = ExpectType<
			typeof validCases[number],
			| "12"
			| "-15"
			| "+12"
			| "150.06"
			| ".5"
			| "12."
			| "001"
			| "1e3"
			| "1E-3"
			| "+1e+3"
			| "0x10"
			| "0b10"
			| "0o10",
			"strict"
		>;

		for (const value of validCases) {
			expect(pattern.test(value)).toBe(true);
		}

		// @ts-expect-error Signed non-decimal numbers are not `${number}`.
		const invalidHexWithPlus: `${number}` = "+0x10";
		// @ts-expect-error Signed non-decimal numbers are not `${number}`.
		const invalidHexWithMinus: `${number}` = "-0x10";
		// @ts-expect-error Infinity is not `${number}`.
		const invalidInfinity: `${number}` = "Infinity";

		for (const value of [
			invalidHexWithPlus,
			invalidHexWithMinus,
			invalidInfinity,
		]) {
			expect(pattern.test(value)).toBe(false);
		}
	});

	it("creates pattern for bigint parser", () => {
		const schema = DDataParser.bigint();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:(?:(?:-?0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+))|(?:-?(?:0|[1-9][0-9]*)))n)");
	});

	it("matches TypeScript bigint template literal forms", () => {
		const schema = DDataParser.bigint();
		const pattern = new RegExp(`^${DDataParser.createTemplateLiteralPattern([schema])}$`);

		const validCases = [
			"12n",
			"-15n",
			"0x10n",
			"-0x10n",
			"0b10n",
			"-0b10n",
			"0o10n",
			"-0o10n",
		] as const satisfies readonly `${bigint}n`[];

		type _CheckValidCases = ExpectType<
			typeof validCases[number],
			| "12n"
			| "-15n"
			| "0x10n"
			| "-0x10n"
			| "0b10n"
			| "-0b10n"
			| "0o10n"
			| "-0o10n",
			"strict"
		>;

		for (const value of validCases) {
			expect(pattern.test(value)).toBe(true);
		}

		// @ts-expect-error Signed positive bigint literals are not `${bigint}n`.
		const invalidDecimalWithPlus: `${bigint}n` = "+12n";
		// @ts-expect-error Signed positive bigint literals are not `${bigint}n`.
		const invalidHexWithPlus: `${bigint}n` = "+0x10n";
		// @ts-expect-error Decimal bigint literals with leading zeroes are not `${bigint}n`.
		const invalidLeadingZero: `${bigint}n` = "001n";

		for (const value of [
			invalidDecimalWithPlus,
			invalidHexWithPlus,
			invalidLeadingZero,
		]) {
			expect(pattern.test(value)).toBe(false);
		}
	});

	it("creates pattern for boolean parser", () => {
		const schema = DDataParser.boolean();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:true|false)");
	});

	it("creates pattern for string parser without checker", () => {
		const schema = DDataParser.string();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[^]*)");
	});

	it("creates pattern for literal parser", () => {
		const schema = DDataParser.literal(["foo", 1]);

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:(?:foo)|(?:1))");
	});

	it("creates number parser pattern for literal parser with non-finite numbers", () => {
		const schema = DDataParser.literal([Number.NaN, Infinity, -Infinity]);
		const pattern = DDataParser.createTemplateLiteralPattern([schema]);
		const regex = new RegExp(`^${pattern}$`);

		expect(regex.test("1")).toBe(true);
		expect(regex.test("-2")).toBe(true);
		expect(regex.test("0x10")).toBe(true);
		expect(regex.test("NaN")).toBe(false);
		expect(regex.test("Infinity")).toBe(false);
		expect(regex.test("-Infinity")).toBe(false);
	});

	it("creates pattern for empty parser", () => {
		const schema = DDataParser.empty();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:undefined)");
	});

	it("creates pattern for nil parser", () => {
		const schema = DDataParser.nil();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:null)");
	});

	it("creates pattern for template literal parser", () => {
		const nested = DDataParser.templateLiteral([
			"prefix-",
			DDataParser.number(),
		]);

		const result = DDataParser.createTemplateLiteralPattern([nested]);

		expect(result).toBe("(?:(?:prefix\\-)(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+))))");
	});

	it("creates pattern for union parser", () => {
		const schema = DDataParser.union([
			DDataParser.number(),
			DDataParser.bigint(),
		]);

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:(?:(?:[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?)|(?:0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)))|(?:(?:(?:-?0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+))|(?:-?(?:0|[1-9][0-9]*)))n))");
	});
});
