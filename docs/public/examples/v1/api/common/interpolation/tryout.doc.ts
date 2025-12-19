import { createInterpolation, type ExpectType } from "@duplojs/utils";

const greet = createInterpolation("Hello {name}, welcome to {place}!", true);

const result = greet(
	{
		name: "ZeRiix",
		place: "Paris",
	},
);

type check = ExpectType<
	typeof result,
	"Hello ZeRiix, welcome to Paris!",
	"strict"
>;
