import { N } from "@duplojs/utils";

const score = 15;
const isBetweenThan = N.betweenThan(score, 10, 20);
// isBetweenThan: true (exclusive bounds)

if (isBetweenThan) {
	// score is inside ]10, 20[
} else {
	// score is outside ]10, 20[
}
