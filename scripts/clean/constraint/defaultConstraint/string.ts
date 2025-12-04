import { String } from "@scripts/clean/primitive";
import { type Constraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";

export const Email = createConstraint(
	"email",
	String,
	DDataParser.checkerEmail(),
);
export type Email = Constraint<typeof Email>;

export const Url = createConstraint(
	"url",
	String,
	DDataParser.checkerUrl(),
);
export type Url = Constraint<typeof Url>;
