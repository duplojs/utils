import { DArray, DString, pipe } from "@duplojs/utils";

const searchQuery = "JavaScript TypeScript Python";
const keywords = pipe(
	searchQuery,
	DString.toLowerCase,
	DString.split(" "),
	DArray.filter((word) => word.length > 0),
);
// keywords: ["javascript", "typescript", "python"]
