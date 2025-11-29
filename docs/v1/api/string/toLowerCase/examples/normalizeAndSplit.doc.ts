import { A, DString, pipe } from "@duplojs/utils";

const searchQuery = "JavaScript TypeScript Python";
const keywords = pipe(
	searchQuery,
	DString.toLowerCase,
	DString.split(" "),
	A.filter((word) => DString.length(word) > 0),
);
// keywords: ["javascript", "typescript", "python"]
