import { createConstraint } from "../constraint";
import * as DDataParser from "../../../dataParser";

export const Positive = createConstraint(
	"positive",
	DDataParser.checkerNumberMin(1),
);
