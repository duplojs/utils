import { asyncPipe } from "@scripts/common/asyncPipe";
import { type ExpectType } from "@scripts/common/types/expectType";

describe("asyncPipe", () => {
	it("input promise number", async() => {
		const result = asyncPipe(
			Promise.resolve(56),
			(value) => value * 10,
			(value) => Promise.resolve(value - 10),
			(value) => ({ value }),
		);

		expect(await result).toStrictEqual({
			value: 550,
		});

		type check = ExpectType<
			typeof result,
			Promise<{ value: number }>,
			"strict"
		>;
	});

	it("input number", async() => {
		const result = asyncPipe(
			56,
			(value) => value * 10,
			(value) => Promise.resolve(value - 10),
			(value) => ({ value }),
		);

		expect(await result).toStrictEqual({
			value: 550,
		});

		type check = ExpectType<
			typeof result,
			Promise<{ value: number }>,
			"strict"
		>;
	});
});
