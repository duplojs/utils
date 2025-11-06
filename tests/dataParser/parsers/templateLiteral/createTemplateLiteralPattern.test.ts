import { DDataParser } from "@scripts";

describe("createTemplateLiteralPattern", () => {
	it("creates pattern for primitive string", () => {
		const result = DDataParser.createTemplateLiteralPattern(["a.b"]);

		expect(result).toBe("(?:a\\.b)");
	});

	it("creates pattern for primitive number", () => {
		const result = DDataParser.createTemplateLiteralPattern([42]);

		expect(result).toBe("(?:42)");
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

	it("creates pattern for string parser with email checker", () => {
		const schema = DDataParser.string({
			checkers: [DDataParser.checkerEmail()],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe(
			"(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\\.)+[A-Za-z]{2,}",
		);
	});

	it("creates pattern for number parser", () => {
		const schema = DDataParser.number();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[0-9]+(\\.[0-9]+)?)");
	});

	it("creates pattern for number parser with int checker", () => {
		const schema = DDataParser.number({
			checkers: [DDataParser.checkerInt()],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[0-9]+)");
	});

	it("creates pattern for bigint parser", () => {
		const schema = DDataParser.bigint();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[0-9]+n)");
	});

	it("creates pattern for boolean parser", () => {
		const schema = DDataParser.boolean();

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:true|false)");
	});

	it("creates pattern for string parser with regex checker", () => {
		const schema = DDataParser.string({
			checkers: [DDataParser.checkerStringRegex(/^abc$/)],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("abc");
	});

	it("creates pattern for string parser with min checker", () => {
		const schema = DDataParser.string({
			checkers: [DDataParser.checkerStringMin(2)],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[^]{2,})");
	});

	it("creates pattern for string parser with max checker", () => {
		const schema = DDataParser.string({
			checkers: [DDataParser.checkerStringMax(5)],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[^]{0,5})");
	});

	it("creates pattern for string parser with min and max checkers", () => {
		const schema = DDataParser.string({
			checkers: [
				DDataParser.checkerStringMin(2),
				DDataParser.checkerStringMax(4),
			],
		});

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:[^]{2,4})");
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

		expect(result).toBe("(?:(?:prefix\\-)(?:[0-9]+(\\.[0-9]+)?))");
	});

	it("creates pattern for union parser", () => {
		const schema = DDataParser.union([
			DDataParser.number(),
			DDataParser.bigint(),
		]);

		const result = DDataParser.createTemplateLiteralPattern([schema]);

		expect(result).toBe("(?:(?:[0-9]+(\\.[0-9]+)?)|(?:[0-9]+n))");
	});
});
