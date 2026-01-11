import { P } from "@scripts";

const input = <{
	kind: "text";
	content: string;
} | {
	kind: "image";
	url: string;
}>{
	kind: "text",
	content: "hello",
};

if (P.isMatch(input, { kind: "text" })) {
	// { kind: "text", content: "hello" }
}
