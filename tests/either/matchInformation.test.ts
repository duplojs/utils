import { pipe, type ExpectType, DEither } from "@scripts";

describe("matchInformation", () => {
	it("matches each information branch for an either input", () => {
		const either = true
			? DEither.right("success", 42)
			: DEither.left("failure", "error");

		const result = DEither.matchInformation(either, {
			success: (value) => {
				type check = ExpectType<
					typeof value,
					42,
					"strict"
				>;

				return value + 1;
			},
			failure: (value) => {
				type check = ExpectType<
					typeof value,
					"error",
					"strict"
				>;

				return value;
			},
		});

		expect(result).toBe(43);

		type check = ExpectType<
			typeof result,
			number | "error",
			"strict"
		>;
	});

	it("returns input directly when input is not an either", () => {
		const result = DEither.matchInformation(30, {});

		expect(result).toBe(30);

		type check = ExpectType<
			typeof result,
			30,
			"strict"
		>;
	});

	it("works in pipe with curried matcher", () => {
		const result = pipe(
			true
				? DEither.ok()
				: DEither.fail(),
			DEither.matchInformation({
				ok: (value) => {
					type check = ExpectType<
						typeof value,
						void,
						"strict"
					>;

					return "ok" as const;
				},
				fail: (value) => {
					type check = ExpectType<
						typeof value,
						void,
						"strict"
					>;

					return "fail" as const;
				},
			}),
		);

		expect(result).toBe("ok");

		type check = ExpectType<
			typeof result,
			"ok" | "fail",
			"strict"
		>;
	});

	it("requires an exhaustive matcher for either information", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		// @ts-expect-error matcher must handle all information values from input either
		DEither.matchInformation(either, {
			ok: () => 1,
		});

		expect(true).toBe(true);
	});
});
