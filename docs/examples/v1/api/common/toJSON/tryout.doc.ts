import { type ExpectType, toJSON } from "@duplojs/utils";

const result = toJSON({
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

type check = ExpectType<
		typeof result,
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
