import { type GetKind } from "@scripts/common";
import { type DataParserChecker, type DataParserDefinition } from "../base";

type DataParserCheckerKindName = keyof GetKind<DataParserChecker>[keyof GetKind<DataParserChecker>];

export type PrepareDataParserDefinition<
	GenericDefinition extends DataParserDefinition,
	GenericOmitProps extends keyof GenericDefinition = never,
> = Partial<
		& Omit<
			GenericDefinition,
			GenericOmitProps | "checkers"
		>
		& {
			readonly checkers: readonly (
				| (
					GenericDefinition["checkers"][number] extends infer InferredChecker
						? InferredChecker extends DataParserChecker
							? (
								keyof GetKind<InferredChecker>[keyof GetKind<InferredChecker>]
							) extends DataParserCheckerKindName
								? InferredChecker
								: never
							: never
						: never
				)
			)[];
		}
>;
