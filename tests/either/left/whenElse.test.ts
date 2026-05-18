import { pipe, type ExpectType, DEither } from "@scripts";

describe("whenIsLeftElse", () => {
	it("executes the left callback with unwrapped value", () => {
		const input = DEither.left("failure", {
			reason: "x" as const,
		});

		const result = DEither.whenIsLeftElse(
			input,
			(value) => {
				type check = ExpectType<
					typeof value,
					{ readonly reason: "x" },
					"strict"
				>;

				expect(value).toStrictEqual({ reason: "x" });
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

	it("executes the else callback with right input", () => {
		const input = DEither.nullableFilled(true);

		const result = DEither.whenIsLeftElse(
			input,
			() => "unexpected",
			(value) => {
				type check = ExpectType<
					typeof value,
					DEither.NullableFilled<true>,
					"strict"
				>;

				expect(value).toBe(input);

				return "right" as const;
			},
		);

		expect(result).toBe("right");

		type check = ExpectType<
			typeof result,
			"unexpected" | "right",
			"strict"
		>;
	});

	it("executes the else callback with non-either input", () => {
		const input = 30 as const;

		const result = DEither.whenIsLeftElse(
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
			DEither.whenIsLeftElse(
				(value) => {
					type check = ExpectType<
						typeof value,
						void,
						"strict"
					>;

					return "left" as const;
				},
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Ok,
						"strict"
					>;

					return "else" as const;
				},
			),
		);

		expect(result).toBe("else");

		type check = ExpectType<
			typeof result,
			"left" | "else",
			"strict"
		>;
	});
});
