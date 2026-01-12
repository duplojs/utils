import { D, pipe, when } from "@scripts";

const input = D.now() as string;

if (D.is(input)) {
	// input is TheDate
}

pipe(
	input,
	when(
		D.is,
		(value) => {
			// value is TheDate
		},
	),
);
