import { Number } from "@scripts/clean/primitive";
import { type GetConstraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";

/**
 * {@include clean/Int/index.md}
 */
export const Int = createConstraint(
	"int",
	Number,
	DDataParser.checkerInt(),
);
export type Int = GetConstraint<typeof Int>;

/**
 * {@include clean/Positive/index.md}
 */
export const Positive = createConstraint(
	"positive",
	Number,
	DDataParser.checkerNumberMin(1),
);
export type Positive = GetConstraint<typeof Positive>;

/**
 * {@include clean/Negative/index.md}
 */
export const Negative = createConstraint(
	"negative",
	Number,
	DDataParser.checkerNumberMax(-1),
);
export type Negative = GetConstraint<typeof Negative>;
