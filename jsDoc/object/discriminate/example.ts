import { O, pipe, when } from "@scripts";

const shapeObj = {
	kind: "circle",
	radius: 2,
} as {
	kind: "circle";
	radius: number;
} | {
	kind: "square";
	size: number;
};

if (O.discriminate(shapeObj, "kind", "circle")) {
	// shapeObj is circle
}

pipe(
	shapeObj,
	when(
		O.discriminate("kind", "square"),
		(value) => {
			// value is square
		},
	),
);

O.discriminate(
	{
		status: "ready",
	},
	"status",
	[
		"ready",
		"idle",
	], // or
); // true
