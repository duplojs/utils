import { Path, DEither, type ExpectType } from "@scripts";

describe("resolveFrom", () => {
	it("returns success when resolving from an absolute origin", () => {
		expect(Path.resolveFrom("/root", ["alpha", "beta"]))
			.toStrictEqual(DEither.success("/root/alpha/beta"));
	});

	it("returns success when an absolute segment overrides previous parts", () => {
		expect(Path.resolveFrom("gamma", ["alpha", "/root", "beta"]))
			.toStrictEqual(DEither.success("/root/beta"));
	});

	it("returns fail when the resolved path is relative", () => {
		const result = Path.resolveFrom("alpha", ["..", ".."]);

		expect(result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			typeof result,
			DEither.EitherFail | DEither.EitherSuccess<string>,
			"strict"
		>;
	});
});
