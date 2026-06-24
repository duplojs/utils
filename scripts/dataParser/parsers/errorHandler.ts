import { callThen, detachObjectMethod, type KindHandler, type FixDeepFunctionInfer, type NeverCoalescing, type Kind } from "@scripts/common";
import { createDataParserKind } from "@scripts/dataParser/kind";
import { type DataParser, DataParserBase, type DataParserDefinition } from "../base";
import { type DataParserError } from "@scripts/dataParser/error";
import { type DataParserChecker } from "../baseChecker";
import { type ApplyRefinementOfDefinition, type Input, type AddCheckersToDefinition, type GetEligibleChecker, type MergeDefinition, type Output, type PrepareDataParserDefinition, type DataParsers, type DataParserCheckers } from "../types";

export type ErrorMessageTransformer = (source: DataParsers | DataParserCheckers) => string | null;

export function createErrorMessageTransformer<
	GenericKindHandler extends KindHandler,
>(
	kindHandler: GenericKindHandler,
	theFunction: (
		source: Extract<
			DataParsers | DataParserCheckers,
			Kind<GenericKindHandler["definition"]>
		>
	) => string | null,
): ErrorMessageTransformer {
	return (source) => {
		if (kindHandler.has(source)) {
			return theFunction(source as never);
		}
		return null;
	};
}

export type DataParserErrorHandlerCheckers<
	GenericInput extends unknown,
> = GetEligibleChecker<GenericInput>;

export interface DataParserDefinitionErrorHandler<
	GenericInput extends unknown = unknown,
> extends DataParserDefinition<
		DataParserErrorHandlerCheckers<GenericInput>
	> {
	inner: DataParser;
	errorMessageTransformers: ErrorMessageTransformer[];
}

export const errorHandlerKind = createDataParserKind("error-handler");

export class DataParserErrorHandler<
	GenericDefinition extends DataParserDefinitionErrorHandler = DataParserDefinitionErrorHandler,
> extends DataParserBase.init(
		errorHandlerKind,
	)<
		GenericDefinition,
		ApplyRefinementOfDefinition<
			Output<GenericDefinition["inner"]>,
			GenericDefinition
		>,
		Input<GenericDefinition["inner"]>
	> {
	public get classConstructor() {
		return this.checkConstructor(DataParserErrorHandler);
	}

	public declare addChecker: <
		GenericChecker extends readonly [
			DataParserChecker<Output<this>>,
			...DataParserChecker<Output<this>>[],
		],
	>(
		...args: FixDeepFunctionInfer<
			readonly [
				DataParserChecker<Output<this>>,
				...DataParserChecker<Output<this>>[],
			],
			GenericChecker
		>
	) => DataParserErrorHandler<
		AddCheckersToDefinition<
			GenericDefinition,
			GenericChecker
		>
	>;

	public static override execParse(
		self: DataParserErrorHandler,
		data: unknown,
		error: DataParserError,
	) {
		return callThen(
			self.definition.inner.exec(data, error),
			(result) => {
				for (const issues of error.issues) {
					for (const errorMessageTransformer of self.definition.errorMessageTransformers) {
						const transformedMessage = errorMessageTransformer(issues.getSource());
						if (transformedMessage) {
							(issues.message as any) = transformedMessage;
						}
					}
				}

				return result;
			},
		);
	}

	public static override dataParserIsAsynchronous(self: DataParserErrorHandler) {
		return self.definition.inner.isAsynchronous();
	}

	public static override prepareDefinition(
		inner: DataParser,
		errorMessageTransformers: ErrorMessageTransformer[],
		definition?: Partial<Omit<DataParserDefinitionErrorHandler, "inner" | "errorMessageTransformers">>,
	): DataParserDefinitionErrorHandler {
		return {
			...definition,
			inner,
			errorMessageTransformers,
			checkers: definition?.checkers ?? [],
			errorMessage: definition?.errorMessage,
		};
	}

	/**
	 * {@include dataParser/classic/errorHandler/index.md}
	 */
	public static override create<
		GenericDataParser extends DataParser,
		const GenericDefinition extends PrepareDataParserDefinition<
			DataParserDefinitionErrorHandler<
				Output<GenericDataParser>
			>,
			"inner" | "errorMessageTransformers"
		> = never,
	>(
		inner: GenericDataParser,
		errorMessageTransformers: ErrorMessageTransformer | ErrorMessageTransformer[],
		definition?: FixDeepFunctionInfer<
			PrepareDataParserDefinition<
				DataParserDefinitionErrorHandler<
					Output<GenericDataParser>
				>,
				"inner" | "errorMessageTransformers"
			>,
			GenericDefinition
		>,
	): DataParserErrorHandler<
			MergeDefinition<
				DataParserDefinitionErrorHandler,
				NeverCoalescing<GenericDefinition, {}> & {
					inner: GenericDataParser;
				}
			>
		> {
		return new DataParserErrorHandler(
			this.prepareDefinition(
				inner,
				errorMessageTransformers instanceof Array
					? errorMessageTransformers
					: [errorMessageTransformers],
				definition,
			),
		) as never;
	}
}

/**
 * {@include dataParser/classic/errorHandler/index.md}
 */
export const errorHandler = detachObjectMethod(DataParserErrorHandler, "create");
