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

pipe(
	null as unknown as Shape,
	P.match(
		{ kind: "circle" },
		forward,
	),
	P.match(
		{ kind: "square" },
		forward,
	),
	// An unhandled case
	P.exhaustive,
);
