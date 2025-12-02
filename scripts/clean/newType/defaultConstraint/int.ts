import { createConstraint } from "../constraint";
import * as DDataParser from "../../../dataParser";

export const Int = createConstraint(
	"int",
	DDataParser.checkerInt(),
);
