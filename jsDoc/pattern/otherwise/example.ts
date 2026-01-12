import { P, pipe } from "@scripts";

const input = <{
	type: "text";
	value: string;
} | {
	type: "count";
	value: number;
}>{
	type: "text",
	value: "hello",
};

P.match(input)
	.with(
		{ type: "text" },
		(item) => item.value.toUpperCase(),
	)
	.with(
		{ type: "count" },
		(item) => `${item.value}:${item.type}`,
	)
	.otherwise(() => "unknown"); // "HELLO"

pipe(
	input,
	P.match(
		{ type: "count" },
		(item) => item.value * 2,
	),
	P.otherwise(() => 0),
); // 4

P.match(input)
	.when(
		(item) => typeof item === "number",
		() => "ok",
	)
	.otherwise(() => "no"); // "ok"
