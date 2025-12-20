import { DP, E, unwrap, D } from "@duplojs/utils";

const year2020 = "date1577836800000+";

const schema = DP
	.coerce
	.date()
	.addChecker(
		DP.checkerRefine(
			D.greaterThan(year2020),
			{
				errorMessage: "date.after-2020",
			},
		),
	);

const result = schema.parse("2024-03-01T10:00:00.000Z");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
