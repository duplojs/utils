import { DPE, E, unwrap, D } from "@duplojs/utils";

const year2030 = "date1893456000000+";

const schema = DPE
	.date()
	.refine(
		D.greaterThan(year2030),
		{
			errorMessage: "date.before-2030",
		},
	);

const result = schema.parse(D.now());

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
