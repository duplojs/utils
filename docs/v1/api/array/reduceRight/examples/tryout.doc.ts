import { A, S, equal } from "@duplojs/utils";

const input = ["Docs", "API", "Array"];

const result = A.reduceRight(
	input,
	"",
	({ element, lastValue, next }) => {
		if (equal(lastValue, "")) {
			return next(element);
		}
		return next(S.concat(element, " / ", lastValue));
	},
);
// result: "Array / API / Docs"
