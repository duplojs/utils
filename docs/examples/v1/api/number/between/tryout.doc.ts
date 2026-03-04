import { N } from "@duplojs/utils";

const score = 15;
const isBetween = N.between(score, 10, 20);
// isBetween: true (inclusive bounds)

if (isBetween) {
	// score is inside [10, 20]
} else {
	// score is outside [10, 20]
}
