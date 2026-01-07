import { C, D } from "@scripts";

const duration = C.Time.createOrThrow(D.createTheTime(3_600_000));
const threshold = D.createTheTime(1_800_000);

if (C.timeGreaterThan(duration, threshold)) {
	// duration is greater than threshold
}
