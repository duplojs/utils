import { pipe, type ExpectType, DEither } from "@scripts";

describe("matchInformationOtherwise", () => {
	it("matches handled information and unwraps value", () => {
		const input = DEither.right("success", 42);

		const result = DEither.matchInformationOtherwise(
			input,
			{
				success: (value) => {
					type check = ExpectType<
						typeof value,
						42,
						"strict"
					>;

					return value + 1;
				},
			},
			(value) => {
				type check = ExpectType<
					typeof value,
					never,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(43);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("uses otherwise when information is not handled", () => {
		const input = DEither.left("failure", "error");

		const result = DEither.matchInformationOtherwise(
			input,
			{ failure: undefined },
			(value) => {
				type check = ExpectType<
					typeof value,
					DEither.Left<"failure", "error">,
					"strict"
				>;

				return "fallback" as const;
			},
		);

		expect(result).toBe("fallback");

		type check = ExpectType<
			typeof result,
			"fallback",
			"strict"
		>;
	});

	it("uses otherwise when input is not an either", () => {
		const input = 30;

		const result = DEither.matchInformationOtherwise(
			input,
			{},
			(value) => {
				type check = ExpectType<
					typeof value,
					number,
					"strict"
				>;

				return value + 2;
			},
		);

		expect(result).toBe(32);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("works in pipe with curried form", () => {
		const result = pipe(
			true
				? DEither.ok()
				: DEither.fail(),
			DEither.matchInformationOtherwise(
				{
					ok: () => "ok" as const,
				},
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Fail,
						"strict"
					>;

					return "otherwise" as const;
				},
			),
		);

		expect(result).toBe("ok");

		type check = ExpectType<
			typeof result,
			"ok" | "otherwise",
			"strict"
		>;
	});

	it("rejects additional matcher keys", () => {
		const input = true
			? DEither.ok()
			: DEither.fail();

		DEither.matchInformationOtherwise(
			input,
			// @ts-expect-error matcher cannot contain unknown information values
			{
				ok: () => "ok",
				fail: undefined,
				unexpected: () => "unexpected",
			},
			() => "otherwise",
		);

		pipe(
			input,
			DEither.matchInformationOtherwise(
				// @ts-expect-error curried matcher cannot contain unknown information values
				{
					ok: () => "ok",
					fail: undefined,
					unexpected: () => "unexpected",
				},
				() => "otherwise",
			),
		);

		expect(true).toBe(true);
	});
});
