import { toJSON } from "@scripts/common/toJson";
import { type ExpectType } from "@scripts/common/types/expectType";

it("toJson", () => {
	const json = toJSON({
		prop: 1,
		prop1: "test",
		prop2: new Date("2025-08-19T15:14:19.467Z"),
		prop3: null,
		prop4: undefined,
		prop5: {
			subProp: [{ prop1: 1 }],
			subProp1: {
				toJSON() {
					return "test";
				},
			},
		},
		method() {
			return void 0;
		},
	});

	expect(json).toStrictEqual({
		prop: 1,
		prop1: "test",
		prop2: "2025-08-19T15:14:19.467Z",
		prop3: null,
		prop4: undefined,
		prop5: {
			subProp: [{ prop1: 1 }],
			subProp1: "test",
		},
		method: undefined,
	});

	type check = ExpectType<
		typeof json,
		{
			prop: number;
			prop1: string;
			prop2: string;
			prop3: null;
			prop4: undefined;
			prop5: {
				subProp: {
					prop1: number;
				}[];
				subProp1: "test";
			};
		},
		"strict"
	>;
});
