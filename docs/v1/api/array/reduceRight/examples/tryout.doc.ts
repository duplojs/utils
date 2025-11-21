import { DArray, DString, equal, pipe } from "@duplojs/utils";

const input = ["Docs", "API", "Array"] as const;

const result = DArray.reduceRight(
	input,
	"",
	({ element, lastValue, next }) => {
		if (equal(lastValue, "")) {
			return next(element);
		}
		return next(DString.concat(element, " / ", lastValue));
	},
);
// result: "Docs / API / Array"

const result2 = pipe(
	input,
	DArray.reduceRight(
		"",
		({ element, lastValue, next }) => next(DString.concat("[", element, "]", lastValue)),
	),
);
// result2: "[Docs][API][Array]"
