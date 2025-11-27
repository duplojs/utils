import { A, DString, pipe } from "@duplojs/utils";

const input = ["users", "profile", "settings"];
const result = pipe(
	input,
	A.map(DString.concat("/")),
	A.reduce(
		"",
		({ element, lastValue, next }) => next(
			DString.concat(element, lastValue),
		),
	),
);
// result: "/users/profile/settings"
