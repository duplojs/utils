import { unPartial, UnPartialError } from "./unPartial";

it("unPartial", () => {
	const input: Partial<{ test: string }> = {
		test: "ok",
	};

	const output = unPartial(
		input,
		["test"],
	);

	expect(output).toStrictEqual({
		test: "ok",
	});

	input.test = undefined;

	expect(() => unPartial(input, ["test"])).toThrowError(UnPartialError);
});
