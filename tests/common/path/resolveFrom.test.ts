import { Path, DEither, pipe, type ExpectType } from "@scripts";

describe("resolveFrom", () => {
	it("returns success when resolving from an absolute origin", () => {
		expect(Path.resolveFrom(["alpha", "beta"], "/root"))
			.toStrictEqual(DEither.success("/root/alpha/beta"));
	});

	it("returns success when an absolute segment overrides previous parts", () => {
		expect(Path.resolveFrom(["alpha", "/root", "beta"], "gamma"))
			.toStrictEqual(DEither.success("/root/beta"));
	});

	it("returns fail when the resolved path is relative", () => {
		expect(Path.resolveFrom(["..", ".."], "alpha"))
			.toStrictEqual(DEither.fail());
	});

	it("use in pipe", () => {
		const result = pipe(
			["alpha", "beta"],
			Path.resolveFrom("/root"),
		);

		expect(result).toStrictEqual(DEither.success("/root/alpha/beta"));

		type check = ExpectType<
			typeof result,
			DEither.EitherFail | DEither.EitherSuccess<string>,
			"strict"
		>;
	});
});
