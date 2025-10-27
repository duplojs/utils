import { DString, DArray, pipe } from "@duplojs/utils";

const codeLines = [
	"    function hello() {",
	"        console.log('Hello');",
	"    }",
];

const result = pipe(
	codeLines,
	DArray.map(DString.trimStart),
);

// result: ["function hello() {", "console.log('Hello');", "}"]
