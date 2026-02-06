import { D, type ExpectType, createTransformer, toJSON, toNative } from "@duplojs/utils";

const input = {
	date: D.create("2024-01-01"),
	duration: D.createTime(90, "minute"),
	list: [D.create("2024-01-02")],
};

const nativeValues = toNative(input);

type check = ExpectType<
	typeof nativeValues,
	{
		date: Date;
		duration: number;
		list: Date[];
	},
	"strict"
>;

const jsonValues = toJSON(input);

type check2 = ExpectType<
	typeof jsonValues,
	{
		date: `date${number}-` | `date${number}+`;
		duration: `time${number}-` | `time${number}+`;
		list: (`date${number}-` | `date${number}+`)[];
	},
	"strict"
>;

const toString = createTransformer("toString");
const stringValues = toString(input);

type check3 = ExpectType<
	typeof stringValues,
	string,
	"strict"
>;
