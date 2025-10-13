import { DString, pipe, type ExpectType } from "@scripts/index";

describe("length", () => {
	it("simple", () => {
		const str = "hello" as const;
		const result = DString.length(str);
		expect(result).toBe(5);

        type check = ExpectType<typeof result, 5, "strict">;
	});

	it("use in pipe", () => {
		const str = "test";
		const result = pipe(str, DString.length);
		expect(result).toBe(4);

        type check = ExpectType<typeof result, 4, "strict">;
	});
});
