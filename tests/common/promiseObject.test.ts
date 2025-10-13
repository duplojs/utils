import { promiseObject, type ExpectType } from "@scripts";

describe("promiseObject", () => {
	it("obtain object", async() => {
		const result = await promiseObject({
			prop1: 1,
			prop2: Promise.resolve("test"),
		});

		expect(result).toStrictEqual({
			prop1: 1,
			prop2: "test",
		});

		type check = ExpectType<
			typeof result,
			{
				prop1: 1;
				prop2: string;
			},
			"strict"
		>;
	});

	it("catch error", async() => {
		const error = new Error();

		const promiseResult = promiseObject({
			prop1: Promise.reject(error),
		});

		await expect(promiseResult).rejects.toBe(error);
	});
});
