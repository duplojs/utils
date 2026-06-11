import { A, pipe, type ExpectType } from "@scripts";

const values = ["alpha", "beta", "gamma"];

if (A.maxElements(values, 10)) {
	const result = A.castMaxElements(values, 15);

	type check = ExpectType<
		typeof result,
		string[] & A.MaxElements<10> & A.MaxElements<15>,
		"strict"
	>;
}

const pipeValues = ["alpha", "beta"];

if (A.maxElements(pipeValues, 8)) {
	const result = pipe(
		pipeValues,
		A.castMaxElements(16),
		A.castMaxElements(12),
	);

	type check = ExpectType<
		typeof result,
		string[] & A.MaxElements<8> & A.MaxElements<12> & A.MaxElements<16>,
		"strict"
	>;
}
