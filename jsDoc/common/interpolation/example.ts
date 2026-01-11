import { createInterpolation } from "@scripts";

const greet = createInterpolation("Hello {name}, welcome to {place}!", true);

const result = greet(
	{
		name: "ZeRiix",
		place: "Paris",
	},
);

// type: "Hello ZeRiix, welcome to Paris!"
