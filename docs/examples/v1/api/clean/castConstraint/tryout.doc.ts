import { C, type ExpectType } from "@duplojs/utils";

const baseMin = C.NumberMin(5).createOrThrow(7);
const widenedMin = C.castConstraint(baseMin, C.NumberMin(3));

type CheckWidenedMin = ExpectType<
	typeof widenedMin,
	& C.ConstrainedType<"number-min-5", 7>
	& C.ConstrainedType<"number-min-3", number>,
	"strict"
>;

const baseMax = C.NumberMax(5).createOrThrow(-2);
const widenedMax = C.castConstraint(
	baseMax,
	[
		C.NumberMax(8),
		C.NumberMax(10),
	],
);

type CheckWidenedMax = ExpectType<
	typeof widenedMax,
	& C.ConstrainedType<"number-max-5", -2>
	& C.ConstrainedType<"number-max-8", number>
	& C.ConstrainedType<"number-max-10", number>,
	"strict"
>;
