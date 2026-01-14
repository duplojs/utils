import { type SimplifyTopLevel } from "@scripts/common";
import { type DataParserChecker, type DataParserDefinition } from "../base";

export type AddCheckersToDefinition<
	GenericDefinition extends DataParserDefinition,
	GenericChecker extends readonly [DataParserChecker, ...DataParserChecker[]],
> = SimplifyTopLevel<
	& Omit<GenericDefinition, "checkers">
	& {
		readonly checkers: readonly [...GenericDefinition["checkers"], ...GenericChecker];
	}
>;
