import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const input = ["/path/to/file.txt", "/home/user/doc.pdf"];
const result = pipe(
	input,
	A.map(
		innerPipe(
			DString.lastIndexOf("/"),
			(index) => index !== undefined ? index + 1 : 0,
		),
	),
	A.map((element, { index }) => DString.substring(element, index)),
);
// result: ["file.txt", "doc.pdf"]
