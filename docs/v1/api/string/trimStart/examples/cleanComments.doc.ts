import { DString, DArray, pipe, when, innerPipe } from "@duplojs/utils";

const comments = [
	"   // This is a comment",
	"\t\t# Python comment",
	"  /* Block comment */",
];

const result = pipe(
	comments,
	DArray.map(
		innerPipe(
			DString.trimStart,
			when(
				DString.startsWith("//"),
				DString.substring(3),
			),
			when(
				DString.startsWith("#"),
				DString.substring(2),
			),
		),
	),
);

// result: ["This is a comment", "Python comment", "/* Block comment */"]
