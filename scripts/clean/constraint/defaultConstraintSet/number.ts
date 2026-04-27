import { createConstraintsSet, type GetConstraints } from "../set";
import { Number } from "../../primitive";
import { Int, Negative, NumberMax, NumberMin, Positive, StrictNegative, StrictPositive } from "../defaultConstraint";

/**
 * {@include clean/PositiveInt/index.md}
 */
export const PositiveInt = createConstraintsSet(
	Number,
	[
		Positive,
		Int,
	],
);
export type PositiveInt = GetConstraints<typeof PositiveInt>;

/**
 * {@include clean/StrictPositiveInt/index.md}
 */
export const StrictPositiveInt = createConstraintsSet(
	Number,
	[
		StrictPositive,
		Int,
	],
);
export type StrictPositiveInt = GetConstraints<typeof StrictPositiveInt>;

/**
 * {@include clean/NegativeInt/index.md}
 */
export const NegativeInt = createConstraintsSet(
	Number,
	[
		Negative,
		Int,
	],
);
export type NegativeInt = GetConstraints<typeof NegativeInt>;

/**
 * {@include clean/StrictNegativeInt/index.md}
 */
export const StrictNegativeInt = createConstraintsSet(
	Number,
	[
		StrictNegative,
		Int,
	],
);
export type StrictNegativeInt = GetConstraints<typeof StrictNegativeInt>;

/**
 * {@include clean/Percent/index.md}
 */
export const Percent = createConstraintsSet(
	Number,
	[
		NumberMin(0),
		NumberMax(100),
	],
);
export type Percent = GetConstraints<typeof Percent>;
