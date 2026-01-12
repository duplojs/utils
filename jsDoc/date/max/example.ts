import { D, pipe } from "@scripts";

const input = [D.yesterday(), D.today(), D.tomorrow()] as const;

const result = D.max(input);

pipe(
	input,
	D.max,
);
