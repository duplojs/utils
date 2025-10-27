import { DString, pipe } from "@duplojs/utils";

const searchQuery = "   TypeScript framework   ";

const result = pipe(
	searchQuery,
	DString.trim,
	DString.toLowerCase,
	DString.replace(/\s+/g, "-"),
);

// result: "typescript-framework"
