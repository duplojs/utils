import { forward, P, pipe } from "@duplojs/utils";

type Shape =
	| {
		kind: "circle";
		radius: number;
	}
	| {
		kind: "square";
		size: number;
	}
	| {
		kind: "rectangle";
		width: number;
		height: number;
	};

const input: Shape = {
	kind: "square",
	size: 1,
} as Shape;

pipe(
	input,
	P.match(
		{ kind: "circle" },
		forward,
	),
	P.match(
		{ kind: "square" },
		forward,
	),
	//@ts-expect-error this make an error
	P.exhaustive,
);
