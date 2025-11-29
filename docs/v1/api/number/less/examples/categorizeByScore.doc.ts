import { N, A, pipe, whenElse, createEnum } from "@duplojs/utils";

const scores = [45, 65, 80, 50, 72, 38];
const passingScore = 50;
const categoryEnum = createEnum(["failed", "passed"]);

const result = pipe(
	scores,
	A.group((score, { output }) => output(
		whenElse(
			score,
			N.lessThan(passingScore),
			() => categoryEnum.failed,
			() => categoryEnum.passed,
		),
		score,
	)),
);

// result: {
//   failed: [45, 38],
//   passed: [65, 80, 50, 72]
// }
