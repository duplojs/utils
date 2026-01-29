import { DP, E, unwrap } from "@scripts";

const parser = DP.date();
const result = parser.parse(new Date("2024-01-01T00:00:00.000Z"));
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheDate
}

const withCheckers = DP.date({
	checkers: [DP.checkerRefine((value) => value !== "date0+")],
});

const coerceParser = DP.coerce.date();
const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
