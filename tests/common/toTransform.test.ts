import { type ExpectType, toTransform } from "@scripts";

it("toTransform", () => {
	const method = () => void 0;

	const json = toTransform({
		prop: 1,
		prop1: "test",
		prop2: new Date("2025-08-19T15:14:19.467Z"),
		prop3: null,
		prop4: undefined,
		prop5: {
			subProp: [{ prop1: 1 }],
			subProp1: {
				toTransform() {
					return "test";
				},
			},
		},
		method,
	});

	expect(json).toStrictEqual({
		prop: 1,
		prop1: "test",
		prop2: new Date("2025-08-19T15:14:19.467Z"),
		prop3: null,
		prop4: undefined,
		prop5: {
			subProp: [{ prop1: 1 }],
			subProp1: "test",
		},
		method,
	});

	type check = ExpectType<
		typeof json,
		{
			prop: number;
			prop1: string;
			prop2: Date;
			prop3: null;
			prop4: undefined;
			prop5: {
				subProp: {
					prop1: number;
				}[];
				subProp1: "test";
			};
			method(): undefined;
		},
		"strict"
	>;
});
