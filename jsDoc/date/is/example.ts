import { type AnyValue, D, pipe, when } from "@scripts";

const input = D.now() as AnyValue;

if (D.is(input)) {
	// input: TheDate
}

pipe(
	input,
	when(D.is, (value) => {
		// value: TheDate
	}),
);
