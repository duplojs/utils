import { D, pipe } from "@scripts";

const input = [D.tomorrow(), D.yesterday(), D.today()] as const;

const result = D.sort(input, "ASC");

pipe(
	input,
	D.sort("ASC"),
);
