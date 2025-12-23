import { Number } from "@scripts/clean/primitive";
import { type GetConstraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";

export const Int = createConstraint(
	"int",
	Number,
	DDataParser.checkerInt(),
);
export type Int = GetConstraint<typeof Int>;

export const Positive = createConstraint(
	"positive",
	Number,
	DDataParser.checkerNumberMin(1),
);
export type Positive = GetConstraint<typeof Positive>;

export const Negative = createConstraint(
	"negative",
	Number,
	DDataParser.checkerNumberMax(-1),
);
export type Negative = GetConstraint<typeof Negative>;
