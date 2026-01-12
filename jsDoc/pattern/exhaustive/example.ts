import { P, pipe } from "@scripts";

const input = <{
	kind: "circle";
	radius: number;
} | {
	kind: "square";
	size: number;
}>{
	kind: "circle",
	radius: 2,
};

P.match(input)
	.with(
		{ kind: "circle" },
		(shape) => shape.radius * 2,
	)
	.with(
		{ kind: "square" },
		(shape) => shape.size * 2,

	)
	.exhaustive(); // 4

pipe(
	input,
	P.match(
		{ kind: "circle" },
		(shape) => shape.radius * 2,
	),
	P.match(
		{ kind: "square" },
		(shape) => shape.size * 2,
	),
	P.exhaustive,
); // 4
