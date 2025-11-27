import { DString, A, pipe } from "@duplojs/utils";

const codeLines = [
	"    function hello() {",
	"        console.log('Hello');",
	"    }",
];

const result = pipe(
	codeLines,
	A.map(DString.trimStart),
);

// result: ["function hello() {", "console.log('Hello');", "}"]
