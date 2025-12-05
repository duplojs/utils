import { type ExpectType, O } from "@duplojs/utils";

type Shape = {
	type: "circle";
	radius: number;
} | {
	type: "square";
	size: number;
};
const input: Shape = {
	type: "circle",
	radius: 10,
};

if (O.discriminate(input, "type", "circle")) {
	type check = ExpectType<
		typeof input,
		{
			type: "circle";
			radius: number;
		},
		"strict"
	>;
}
