import { pipe, type ExpectType, DEither, forward, type EscapeVoid } from "@scripts";

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
			failure: forward,
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
				: DEither.error("test"),
			DEither.matchInformation({
				ok: forward,
				error: (value) => {
					type check = ExpectType<
						typeof value,
						"test",
						"strict"
					>;

					return "fail" as const;
				},
			}),
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			EscapeVoid | "fail",
			"strict"
		>;
	});

	it("rejects missing and additional matcher keys", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		// @ts-expect-error matcher must handle all information values from input either
		DEither.matchInformation(either, {
			ok: () => 1,
		});

		// @ts-expect-error matcher cannot contain unknown information values
		DEither.matchInformation(either, {
			ok: () => 1,
			fail: () => 2,
			unexpected: () => 3,
		});

		pipe(
			either,
			// @ts-expect-error curried matcher must handle all information values
			DEither.matchInformation({
				ok: () => 1,
			}),
		);

		pipe(
			either,
			DEither.matchInformation(
				// @ts-expect-error curried matcher cannot contain unknown information values
				{
					ok: () => 1,
					fail: () => 2,
					unexpected: () => 3,
				},
			),
		);

		expect(true).toBe(true);
	});
});
