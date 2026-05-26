import { pipe, when, type ExpectType, DEither } from "@scripts";

describe("hasInformation", () => {
	it("matches a single information in default usage", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		const result = DEither.hasInformation(either, "ok");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof either,
				DEither.Ok,
				"strict"
			>;
		}
	});

	it("matches when information is included in an information array", () => {
		const either = true
			? DEither.right("right", 42)
			: DEither.left("left");

		const result = DEither.hasInformation(either, ["left", "right"]);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof either,
				DEither.Right<"right", 42> | DEither.Left<"left", undefined>,
				"strict"
			>;
		}
	});

	it("returns false when information array does not include current information", () => {
		const either = true
			? DEither.left("left")
			: DEither.right("right", 42);

		const result = DEither.hasInformation(either, ["right"]);

		expect(result).toBe(false);
	});

	it("works in pipe with the curried predicate", () => {
		const either = true
			? DEither.ok()
			: DEither.fail();

		const result = pipe(
			either,
			when(
				DEither.hasInformation("ok"),
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Ok,
						"strict"
					>;

					return 10;
				},
			),
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			number | DEither.Fail,
			"strict"
		>;
	});

	it("works in pipe with an information array in curried form", () => {
		const either = true
			? DEither.left("left")
			: DEither.right("right", 42);

		const result = pipe(
			either,
			when(
				DEither.hasInformation(["left", "right"]),
				(value) => {
					type check = ExpectType<
						typeof value,
						DEither.Left<"left", undefined> | DEither.Right<"right", 42>,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toStrictEqual(DEither.left("left"));

		type check = ExpectType<
			typeof result,
			DEither.Left<"left", undefined> | DEither.Right<"right", 42>,
			"strict"
		>;
	});
});
