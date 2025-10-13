import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["users", "profile", "settings"];
const result = pipe(
	input,
	DArray.map(DString.concat("/")),
	DArray.reduce(
		"",
		({ element, lastValue, next }) => next(
			DString.concat(element, lastValue),
		),
	),
);
// result: "/users/profile/settings"
