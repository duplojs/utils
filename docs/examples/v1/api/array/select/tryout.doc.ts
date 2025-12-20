import { A, O, S, type ExpectType } from "@duplojs/utils";

interface Input {
	prop?: number;
	type: string;
	id: string;
}

const input: Input[] = [
	{
		id: "a",
		prop: 12,
		type: "someType",
	},
	{
		id: "b",
		prop: undefined,
		type: "type",
	},
	{
		id: "c",
		type: "type",
	},
	{
		id: "d",
		prop: 5,
		type: "someType",
	},
];

const result = A.select(
	input,
	({ element, select, skip }) => O.hasKeys(element, "prop") && S.startsWith(element.type, "some")
		? select({
			...element,
			type: element.type,
		})
		: skip(),
);

const filtered = A.filter(
	input,
	(element) => O.hasKeys(element, "prop") && S.startsWith(element.type, "some"),
);

type checkResult = ExpectType<
	typeof result,
	{
		id: string;
		type: `some${string}`;
		prop: number;
	}[],
	"strict"
>;

type checkFilter = ExpectType<
	typeof filtered,
	{
		prop?: number;
		type: string;
		id: string;
	}[],
	"strict"
>;
