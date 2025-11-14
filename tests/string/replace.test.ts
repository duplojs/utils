import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("replace", () => {
	it("should replace first occurrence", () => {
		expect(DString.replace("javascript", /script/, "lang")).toBe("javalang");
	});

	it("should behave like native replace when using a function replacer", () => {
		const input = "Hello, ${first} ${last}! Welcome back, ${first}.";
		const pattern = /\${(\w+)}/g;

		const nativeResult = input.replace(
			pattern,
			(
				match: string,
				variableName: string,
				offset: number,
				self: string,
			) => `${variableName.toUpperCase()}@${offset}@${self.length}`,
		);
		const duploResult = DString.replace(
			input,
			pattern,
			({ matchedValue, groups, offset, self }) => `${groups[0]!.toUpperCase()}@${offset}@${self.length}`,
		);

		expect(duploResult).toBe(nativeResult);
		expect(
			DString.replace(
				input,
				"9",
				() => "8",
			),
		).toBe(input);
	});

	it("test named group", () => {
		const input = "Hello, ${first} ${last}! Welcome back, ${first}.";
		const pattern = /\${(?<myG>\w+)}/g;

		const nativeResult = input.replace(
			pattern,
			(...args) => JSON.stringify(args.pop()),
		);
		const duploResult = DString.replace(
			input,
			pattern,
			({ namedGroups }) => JSON.stringify(namedGroups),
		);

		expect(duploResult).toBe(nativeResult);
	});

	it("use in pipe", () => {
		const result = pipe(
			["duplojs", "nestjs", "expressjs"],
			DArray.map(DString.replace("js", "framework")),
			DArray.join(" + "),
		);
		expect(result).toBe("duploframework + nestframework + expressframework");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
