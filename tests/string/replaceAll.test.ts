import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("replaceAll", () => {
	it("should replace all occurrences", () => {
		expect(DString.replaceAll("aaabbbccc", "a", "x")).toBe("xxxbbbccc");
	});

	it("use in pipe", () => {
		const result = pipe(
			["test-test", "demo-demo", "code-code"],
			DArray.join(" | "),
			DString.replaceAll("-", "_"),
		);
		expect(result).toBe("test_test | demo_demo | code_code");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
