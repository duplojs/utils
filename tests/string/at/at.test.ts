import { DString, pipe, type ExpectType } from "@scripts";

describe("at", () => {
	it("returns char at index 0", () => {
		const result = DString.at("duplojs", 0);
		expect(result).toBe("d");

        type check = ExpectType<
            typeof result,
			string | undefined,
			"strict"
        >;
	});

	it("returns char at index 3", () => {
		const result = DString.at("duplojs", 3);
		expect(result).toBe("l");
	});

	it("returns undefined for out-of-bounds index", () => {
		const result = DString.at("duplojs", 100);
		expect(result).toBeUndefined();
	});

	it("returns undefined for empty string", () => {
		const result = DString.at("", 0);
		expect(result).toBeUndefined();
	});

	it("use in pipe", () => {
		const result = pipe(
			"duplojs",
			DString.at(1),
		);
		expect(result).toBe("u");
	});
});
