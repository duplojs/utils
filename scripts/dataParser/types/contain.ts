import { type IsEqual } from "@scripts/common";
import { type DataParser } from "../base";
import { type DataParserObject, type DataParserArray, type DataParserRecord, type DataParserTemplateLiteral, type DataParserLazy, type DataParserNullable, type DataParserOptional, type DataParserPipe, type DataParserRecover, type DataParserTransform, type DataParserTuple, type DataParserUnion } from "../parsers";

export type Contain<
	GenericDataParser extends DataParser,
	GenericExpectDataParser extends DataParser,
> = IsEqual<GenericDataParser, never> extends true
	? false
	: GenericDataParser extends GenericExpectDataParser
		? true
		: GenericDataParser extends DataParserArray
			? Contain<
				GenericDataParser["definition"]["element"],
				GenericExpectDataParser
			>
			: GenericDataParser extends DataParserObject
				? Contain<
					GenericDataParser["definition"]["shape"][keyof GenericDataParser["definition"]["shape"]],
					GenericExpectDataParser
				> extends false
					? false
					: true
				: GenericDataParser extends DataParserRecord
					? Contain<
						GenericDataParser["definition"]["value"],
						GenericExpectDataParser
					>
					: GenericDataParser extends DataParserTemplateLiteral
						? Contain<
							Extract<GenericDataParser["definition"]["template"], DataParser>,
							GenericExpectDataParser
						> extends false
							? false
							: true
						: GenericDataParser extends DataParserLazy
							? Contain<
								GenericDataParser["definition"]["getter"]["value"],
								GenericExpectDataParser
							>
							: GenericDataParser extends DataParserNullable
								? Contain<
									GenericDataParser["definition"]["inner"],
									GenericExpectDataParser
								>
								: GenericDataParser extends DataParserOptional
									? Contain<
										GenericDataParser["definition"]["inner"],
										GenericExpectDataParser
									>
									: GenericDataParser extends DataParserPipe
										? Contain<
											(
												| GenericDataParser["definition"]["input"]
												| GenericDataParser["definition"]["output"]
											),
											GenericExpectDataParser
										> extends false
											? false
											: true
										: GenericDataParser extends DataParserRecover
											? Contain<
												GenericDataParser["definition"]["inner"],
												GenericExpectDataParser
											>
											: GenericDataParser extends DataParserTransform
												? Contain<
													GenericDataParser["definition"]["inner"],
													GenericExpectDataParser
												>
												: GenericDataParser extends DataParserTuple
													? Contain<
														GenericDataParser["definition"]["shape"][number],
														GenericExpectDataParser
													> extends false
														? false
														: true
													: GenericDataParser extends DataParserUnion
														? Contain<
															GenericDataParser["definition"]["options"][number],
															GenericExpectDataParser
														> extends false
															? false
															: true
														: false;
