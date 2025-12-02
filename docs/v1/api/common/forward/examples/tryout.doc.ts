import { type ExpectType, forward } from "@duplojs/utils";

const input = {
	id: 1,
	name: "ZeRiix",
};

const result = forward(input);

type check = ExpectType<
	typeof result,
	{
		id: number;
		name: string;
	},
	"strict"
>;
