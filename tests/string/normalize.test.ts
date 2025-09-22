import { DArray, DString, type ExpectType, pipe } from "@scripts/index";

describe("normalize", () => {
	it("should normalize string", () => {
		const str = "bascule\u0301";
		const result = DString.normalize(str, "NFC");
		expect(result).toBe("basculé");
	});

	it("use in pipe", () => {
		const result = pipe(
			[
				"cafe\u0301",
				"nai\u0308ve",
				"résume\u0301",
			],
			DArray.map(DString.normalize("NFC")),
			DArray.join(" - "),
		);
		expect(result).toBe("café - naïve - résumé");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
