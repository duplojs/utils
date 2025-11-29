import { DString, A, pipe } from "@duplojs/utils";

const keywords = ["select", "from", "where", "order by", "limit"];

const result = pipe(
	keywords,
	A.map(DString.toUpperCase),
	A.join(" "),
);

// result: "SELECT FROM WHERE ORDER BY LIMIT"
