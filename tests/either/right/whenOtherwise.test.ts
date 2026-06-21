import { pipe, type ExpectType, DEither } from "@scripts";

describe("whenIsRightOtherwise", () => {
	it("executes the right callback with unwrapped value", () => {
		const input = DEither.right("success", {
			id: 1 as const,
		});

		const result = DEither.whenIsRightOtherwise(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					{ readonly id: 1 },
					"strict"
				>;

				expect(value).toStrictEqual({ id: 1 });
				expect(value).not.toBe(input);

				return 10;
			},
			() => "unexpected",
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			"unexpected" | 10,
			"strict"
		>;
	});

	it("executes the otherwise callback with left input", () => {
		const input = DEither.nullableEmpty();

		const result = DEither.whenIsRightOtherwise(
			input,
			() => "unexpected",
			(value) => {
				type check = ExpectType<
					typeof value,
					DEither.NullableEmpty,
					"strict"
				>;

				expect(value).toBe(input);

				return "left" as const;
			},
		);

		expect(result).toBe("left");

		type check = ExpectType<
			typeof result,
			"unexpected" | "left",
			"strict"
		>;
	});

	it("executes the otherwise callback with non-either input", () => {
		const input = 30 as const;

		const result = DEither.whenIsRightOtherwise(
			input,
			() => "unexpected",
			(value) => {
				type check = ExpectType<
					typeof value,
					30,
					"strict"
				>;

				return value + 2;
			},
		);

		expect(result).toBe(32);

		type check = ExpectType<
			typeof result,
			number | "unexpected",
			"strict"
		>;
	});

	it("works in pipe with curried form", () => {
		const result = pipe(
			true
				? DEither.ok()
				: DEither.fail(),
			DEither.whenIsRightOtherwise(
				(value) => {
					type check = ExpectType<
						typeof value,
						void,
						"strict"
					>;

					return "right" as const;
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

		expect(result).toBe("right");

		type check = ExpectType<
			typeof result,
			"right" | "otherwise",
			"strict"
		>;
	});
});
