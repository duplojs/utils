import { DString, DArray, pipe } from "@duplojs/utils";

const keywords = ["select", "from", "where", "order by", "limit"];

const result = pipe(
	keywords,
	DArray.map(DString.toUpperCase),
	DArray.join(" "),
);

// result: "SELECT FROM WHERE ORDER BY LIMIT"
