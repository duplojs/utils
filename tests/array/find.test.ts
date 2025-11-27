import { DArray, DString, type ExpectType, innerPipe, pipe } from "@scripts";

describe("find", () => {
	const input = [
		{
			type: "product",
			name: "superName",
			size: 12,
		},
		{
			type: "book",
			title: "bou",
			pageQuantity: 200,
		},
		{
			type: "care",
			model: "v12",
			wheel: 5,
		},
	] as const;

	it("find right value", () => {
		const result = DArray.find(
			input,
			(value) => value.type === "book",
		);

		expect(result).toStrictEqual({
			type: "book",
			title: "bou",
			pageQuantity: 200,
		});

		type check = ExpectType<
			typeof result,
			{
				readonly type: "book";
				readonly title: "bou";
				readonly pageQuantity: 200;
			} | undefined,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DArray.find((value) => value.type === "book"),
		);

		expect(result).toStrictEqual({
			type: "book",
			title: "bou",
			pageQuantity: 200,
		});

		type check = ExpectType<
			typeof result,
			{
				readonly type: "book";
				readonly title: "bou";
				readonly pageQuantity: 200;
			} | undefined,
			"strict"
		>;
	});

	it("works with complex pipe", () => {
		const configs = [
			{
				key: "USER_NAME",
				value: "john",
			},
			{
				key: "API_KEY",
				value: "secret123",
			},
			{
				key: "DATABASE_URL",
				value: "localhost",
			},
		] as const;

		const result = pipe(
			configs,
			DArray.find(
				innerPipe(
					(config) => config.key,
					DString.toLowerCase,
					DString.split("_"),
					DArray.at(0),
					(value) => value === "api",
				),
			),
		);

		expect(result).toStrictEqual({
			key: "API_KEY",
			value: "secret123",
		});

		type check = ExpectType<
			typeof result,
			| {
				readonly key: "USER_NAME";
				readonly value: "john";
			}
			| {
				readonly key: "API_KEY";
				readonly value: "secret123";
			}
			| {
				readonly key: "DATABASE_URL";
				readonly value: "localhost";
			}
			| undefined,
			"strict"
		>;
	});
});
