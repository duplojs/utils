import { C } from "@scripts";

const baseMin = C.NumberMin(5).createOrThrow(7);
const widenedMin = C.castConstraint(baseMin, C.NumberMin(3));
// widenedMin: ConstrainedType<"number-min-5", 7> & ConstrainedType<"number-min-3", number>

const baseMax = C.NumberMax(5).createOrThrow(-2);
const widenedMax = C.castConstraint(
	baseMax,
	[
		C.NumberMax(8),
		C.NumberMax(10),
	],
);
// widenedMax has "number-max-5", "number-max-8", "number-max-10"

const positive = C.Positive.createOrThrow(2);
const relaxed = C.castConstraint(positive, C.NumberMin(-5));
// relaxed keeps the same value and can be used where "number-min--5" is required
