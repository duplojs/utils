import { forward, P } from "@scripts";

const input = <{
	kind: "text";
	content: string;
} | {
	kind: "error";
	message: string;
} | {
	kind: "image";
	url: string;
}>{
	kind: "text",
	content: "hello",
};

P.match(
	input,
	forward({ kind: P.union("text", "image") }),
	() => {
		// { kind: "text"; content: string; } | { kind: "error"; message: string;}
	},
);
