import { DObject, pipe, type ExpectType } from "@scripts";

describe("getProperty", () => {
	it("simple object", () => {
		const obj = {
			prop1: "tt",
			prop2: 1,
		};

		const result = DObject.getProperty(obj, "prop1");

		expect(result).toBe("tt");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("union object", () => {
		const obj = {
			prop1: "tt",
			prop2: 1,
		} as { prop1: string } | {
			prop2: number;
			prop1: number;
		} | { prop3: string };

		const result = DObject.getProperty(obj, "prop1");

		expect(result).toBe("tt");

		type check = ExpectType<
			typeof result,
			string | number | undefined,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const obj = {
			prop1: "tt",
			prop2: 1,
		};

		const result = pipe(
			obj,
			DObject.getProperty("prop1"),
		);

		expect(result).toBe("tt");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
