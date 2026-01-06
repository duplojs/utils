import { unwrap, DP, E, DDate } from "@duplojs/utils";

const schema = DP.coerce
	.time()
	.addChecker(
		DP.checkerTimeMin(
			DDate.createTime(60000),
			{ errorMessage: "time.min" },
		),
		DP.checkerTimeMax(
			DDate.createTime(3600000),
			{ errorMessage: "time.max" },
		),
	);

const result = schema.parse("00:45:00");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
