import { DDataParser, DEither } from "@scripts";

describe("base extended", () => {
	it("array", () => {
		const schema = DDataParser.extended.string().array();

		expect(schema.parse(["test", "toto"])).toStrictEqual(
			DEither.success(["test", "toto"]),
		);

		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("arrayCoalescing", () => {
		const schema = DDataParser.extended.string().arrayCoalescing();

		expect(schema.parse(["test", "toto"])).toStrictEqual(
			DEither.success(["test", "toto"]),
		);

		expect(schema.parse("test")).toStrictEqual(
			DEither.success(["test"]),
		);

		expect(schema.parse(1)).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("transform", () => {
		const schema = DDataParser.extended.number().transform((data) => `${data}`);

		expect(schema.parse(1)).toStrictEqual(
			DEither.success("1"),
		);

		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("pipe", () => {
		const schema = DDataParser.extended.number({ coerce: true }).pipe(
			DDataParser.extended.number(),
		);

		expect(schema.parse("1")).toStrictEqual(
			DEither.success(1),
		);

		expect(schema.parse({})).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("optional", () => {
		const schema = DDataParser.extended.number().optional();

		expect(schema.parse(1)).toStrictEqual(
			DEither.success(1),
		);
		expect(schema.parse(undefined)).toStrictEqual(
			DEither.success(undefined),
		);

		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("nullable", () => {
		const schema = DDataParser.extended.number().nullable();

		expect(schema.parse(1)).toStrictEqual(
			DEither.success(1),
		);
		expect(schema.parse(null)).toStrictEqual(
			DEither.success(null),
		);

		expect(schema.parse("test")).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("nullable", () => {
		const schema = DDataParser.extended.number().or(
			DDataParser.extended.string(),
		);

		expect(schema.parse(1)).toStrictEqual(
			DEither.success(1),
		);
		expect(schema.parse("null")).toStrictEqual(
			DEither.success("null"),
		);

		expect(schema.parse({})).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("method who add checker", () => {
		const schema = DDataParser.extended.number().min(5).max(10);

		expect(schema.parse(5)).toStrictEqual(
			DEither.success(5),
		);
		expect(schema.parse(10)).toStrictEqual(
			DEither.success(10),
		);

		expect(schema.parse(2)).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);

		expect(schema.parse(11)).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("clone", () => {
		const schema = DDataParser.extended.number().clone().min(0);

		expect(schema.parse(1)).toStrictEqual(
			DEither.success(1),
		);

		expect(schema.parse({})).toStrictEqual(
			DEither.error(
				expect.any(Object),
			),
		);
	});

	it("add non function property", () => {
		const schema = DDataParser.dataParserExtendedInit(
			DDataParser.string(),
			{ test: 12 },
		);

		expect((schema as any).test).toBe(12);
	});
});
