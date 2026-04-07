import { pipe, Printer, type ExpectType } from "@scripts";

describe("Printer", () => {
	it("colorized supports direct and curried calls", () => {
		const directResult = Printer.colorized("value", "red");
		const curriedResult = pipe(
			"value",
			Printer.colorized("red"),
		);

		expect(directResult).toBe("\x1b[31mvalue\x1b[0m");
		expect(curriedResult).toBe("\x1b[31mvalue\x1b[0m");

		type CheckDirect = ExpectType<
			typeof directResult,
			string,
			"strict"
		>;

		type CheckCurried = ExpectType<
			typeof curriedResult,
			string,
			"strict"
		>;
	});

	it("colorizedBold supports direct and curried calls", () => {
		const directResult = Printer.colorizedBold("value", "cyan");
		const curriedResult = pipe(
			"value",
			Printer.colorizedBold("cyan"),
		);

		expect(directResult).toBe("\x1b[1m\x1b[36mvalue\x1b[0m\x1b[0m");
		expect(curriedResult).toBe("\x1b[1m\x1b[36mvalue\x1b[0m\x1b[0m");

		type CheckDirect = ExpectType<
			typeof directResult,
			string,
			"strict"
		>;

		type CheckCurried = ExpectType<
			typeof curriedResult,
			string,
			"strict"
		>;
	});

	it("render helpers flatten nested values and skip falsy non-string values", () => {
		const lineResult = Printer.renderLine([
			"alpha",
			["beta", false, null, undefined],
			true,
			["gamma"],
		]);
		const paragraphResult = pipe(
			[
				"title",
				["", "body"],
				false,
				true,
			] as const,
			Printer.renderParagraph,
		);

		expect(lineResult).toBe("alpha beta true gamma");
		expect(paragraphResult).toBe("title\n\nbody\ntrue");
	});

	it("stringify returns JSON when possible and falls back to string coercion", () => {
		const objectResult = Printer.stringify({
			name: "duplo",
		});
		const bigintResult = Printer.stringify(12n);
		const circular = {} as {
			self?: unknown;
			toString(): string;
		};
		circular.self = circular;
		circular.toString = () => "[Circular]";

		const circularResult = Printer.stringify(circular);

		expect(objectResult).toBe("{\"name\":\"duplo\"}");
		expect(bigintResult).toBe("12");
		expect(circularResult).toBe("[Circular]");
	});
});
