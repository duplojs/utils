import { pipe, type ExpectType, unwrapGroup, wrapValue } from "@scripts";

describe("unwrapGroup", () => {
	it("unwraps wrapped values without mutating the input group", () => {
		const wrapped = wrapValue(1 as const);
		const group = {
			aa: wrapped,
			ba: "ok" as const,
			ca: 3 as const,
		};

		const result = unwrapGroup(group);

		expect(result).toStrictEqual({
			aa: 1,
			ba: "ok",
			ca: 3,
		});
		expect(result).not.toBe(group);
		expect(group.aa).toBe(wrapped);

		type check = ExpectType<
			typeof result,
			{
				aa: 1;
				ba: "ok";
				ca: 3;
			},
			"strict"
		>;
	});

	it("works in pipe with a group input", () => {
		const result = pipe(
			{ value: wrapValue("test" as const) },
			unwrapGroup,
		);

		expect(result).toStrictEqual({
			value: "test",
		});

		type check = ExpectType<
			typeof result,
			{ value: "test" },
			"strict"
		>;
	});
});
