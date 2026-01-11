import { String } from "@scripts/clean/primitive";
import { type GetConstraint, createConstraint } from "../base";
import * as DDataParser from "../../../dataParser";

/**
 * {@include clean/Email/index.md}
 */
export const Email = createConstraint(
	"email",
	String,
	DDataParser.checkerEmail(),
);
export type Email = GetConstraint<typeof Email>;

/**
 * {@include clean/Url/index.md}
 */
export const Url = createConstraint(
	"url",
	String,
	DDataParser.checkerUrl(),
);
export type Url = GetConstraint<typeof Url>;
