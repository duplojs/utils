import { DObject, pipe, type ExpectType, when } from "@scripts";

describe("hasKeys", () => {
	it("has", () => {
		const input: {
			test?: string;
			toto?: number;
			tutu?: number;
		} = {
			test: "ok",
			toto: 12,
		};

		const output = DObject.hasKeys(
			input,
			["test", "toto"],
		);

		expect(output).toEqual(true);

		if (output) {
			type check = ExpectType<
				typeof input,
				{
					test: string;
					toto: number;
					tutu?: number | undefined;
				},
				"strict"
			>;
		}
	});

	it("missing", () => {
		const input: Partial<{
			test: string;
			toto: number;
		}> = {};

		const output = DObject.hasKeys(
			input,
			"test",
		);

		expect(output).toEqual(false);
	});

	it("use in pipe", () => {
		const input: { test?: number } = { test: 1 };
		const result = pipe(
			input,
			when(
				DObject.hasKeys(["test"]),
				(value) => {
					type check = ExpectType<
						typeof value,
						{
							test: number;
						},
						"strict"
					>;

					return value.test;
				},
			),
		);

		expect(result).toBe(1);

		type check = ExpectType<
			typeof result,
			number | {
				test?: number | undefined;
			},
			"strict"
		>;
	});
});
