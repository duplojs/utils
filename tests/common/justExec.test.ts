import { justExec, pipe, type ExpectType } from "@scripts";

describe("justExec", () => {
	it("executes the callback and returns its output", () => {
		const result = justExec(
			() => 42 as const,
		);

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42,
			"strict"
		>;
	});

	it("executes the callback once per call", () => {
		let callCount = 0;

		const result = justExec(() => {
			callCount += 1;
			return "ok";
		});

		expect(result).toBe("ok");
		expect(callCount).toBe(1);

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("works in pipe", () => {
		const result = pipe(
			"start",
			() => justExec(
				() => "done" as const,
			),
		);

		expect(result).toBe("done");

		type check = ExpectType<
			typeof result,
			"done",
			"strict"
		>;
	});
});
