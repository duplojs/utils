import { DObject } from "@duplojs/utils";

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
const result = DObject.discriminate(input, "type", "circle");
// result: true
