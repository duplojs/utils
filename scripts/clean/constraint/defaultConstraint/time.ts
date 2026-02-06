import { createConstraint, type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { Time } from "@scripts/clean/primitive";
import { TheTime } from "@scripts/date";

/**
 * {@include clean/PositiveTime/index.md}
 */
export const PositiveTime = createConstraint(
	"positive-time",
	Time,
	DDataParser.checkerTimeMin(TheTime.new(1)),
);
export type PositiveTime = GetConstraint<typeof PositiveTime>;

/**
 * {@include clean/NegativeTime/index.md}
 */
export const NegativeTime = createConstraint(
	"negative-time",
	Time,
	DDataParser.checkerTimeMax(TheTime.new(-1)),
);
export type NegativeTime = GetConstraint<typeof NegativeTime>;
