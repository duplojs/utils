import { DArray, type ExpectType, pipe } from "@scripts/index";

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
});
