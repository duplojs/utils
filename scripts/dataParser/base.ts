import { type AnyFunction, type AnyValue, type GetKindHandler, type GetKindValue, type Kind, type KindHandler, type RemoveKind, simpleClone } from "@scripts/common";
import { addIssue, createError, SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue, type DataParserError, addPromiseIssue } from "./error";
import * as DEither from "@scripts/either";
import { createDataParserKind } from "./kind";

export const SymbolDataParserErrorLabel = "SymbolDataParserError";
export const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
export type SymbolDataParserError = typeof SymbolDataParserError;

export const checkerKind = createDataParserKind("checker");

export interface DataParserCheckerDefinition {
	readonly errorMessage?: string;
}

export interface DataParserChecker<
	GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
	GenericInput extends AnyValue = AnyValue,
> extends Kind<typeof checkerKind.definition, GenericInput> {
	readonly definition: GenericDefinition;
	exec(data: GenericInput, self: this): GenericInput | SymbolDataParserErrorIssue;
}

export function dataParserCheckerInit<
	GenericDataParserChecker extends DataParserChecker,
>(
	kind: Exclude<
		GetKindHandler<GenericDataParserChecker>,
		typeof checkerKind
	>,
	params: NoInfer<
		Omit<
			RemoveKind<GenericDataParserChecker>,
			"exec"
		>
	>,
	exec: (
		...args: Parameters<GenericDataParserChecker["exec"]>
	) => GetKindValue<
		typeof checkerKind,
		GenericDataParserChecker
	> | SymbolDataParserErrorIssue,
): GenericDataParserChecker {
	return (kind as KindHandler).setTo(
		checkerKind.setTo({
			...params,
			exec,
		}),
	) as never;
}

export const dataParserKind = createDataParserKind<
	"base",
	{
		input: unknown;
		output: unknown;
	}
>("base");

export interface DataParserDefinition<
	GenericChecker extends DataParserChecker = DataParserChecker,
> {
	readonly errorMessage?: string;
	readonly checkers: readonly (GenericChecker)[];
}

export interface DataParser<
	GenericDefinition extends DataParserDefinition = DataParserDefinition,
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends Kind<
		typeof dataParserKind.definition,
		{
			input: GenericInput;
			output: GenericOutput;
		}
	> {
	readonly definition: GenericDefinition;
	exec(
		data: unknown,
		error: DataParserError,
	): GenericOutput | SymbolDataParserError;
	asyncExec(
		data: unknown,
		error: DataParserError,
	): Promise<GenericOutput | SymbolDataParserError>;
	parse(
		data: unknown,
	): DEither.EitherSuccess<GenericOutput> | DEither.EitherError<DataParserError>;
	asyncParse(
		data: unknown,
	): Promise<
		| DEither.EitherSuccess<GenericOutput>
		| DEither.EitherError<DataParserError>
	>;
	addChecker(...args: never): DataParser;
	clone(): this;
}

interface DataParserInitExecParams<
	GenericDataParser extends DataParser,
> {
	sync(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]):(
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserErrorIssue
		| SymbolDataParserErrorPromiseIssue
	);
	async(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): Promise<
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserErrorIssue
		| SymbolDataParserErrorPromiseIssue
	>;
}

export function dataParserInit<
	GenericDataParser extends DataParser,
>(
	kind: Exclude<
		GetKindHandler<GenericDataParser>,
		typeof dataParserKind
	>,
	params: NoInfer<
		Omit<
			RemoveKind<GenericDataParser>,
			"parse" | "exec" | "asyncParse" | "asyncExec" | "addChecker" | "clone"
		>
	>,
	exec: (
		| DataParserInitExecParams<GenericDataParser>
		| DataParserInitExecParams<GenericDataParser>["sync"]
	),
): GenericDataParser {
	const formattedExec = typeof exec === "object"
		? exec
		: {
			sync: exec,
			async: exec,
		};

	function middleExec(
		data: unknown,
		error: DataParserError,
	) {
		let result = (formattedExec.sync as AnyFunction)(data, error, dataParser) as AnyValue;

		if (result === SymbolDataParserErrorIssue) {
			addIssue(error, dataParser as never, data);

			return SymbolDataParserError;
		} else if (result === SymbolDataParserErrorPromiseIssue) {
			addPromiseIssue(error, dataParser as never, data);

			return SymbolDataParserError;
		} else if (
			result !== SymbolDataParserError
			&& dataParser.definition.checkers.length
		) {
			for (const checker of dataParser.definition.checkers) {
				const checkerResult = checker.exec(result, checker);

				if (checkerResult === SymbolDataParserErrorIssue) {
					addIssue(error, checker as never, result);

					return SymbolDataParserError;
				} else {
					result = checkerResult;
				}
			}
		}

		return result;
	}

	async function middleAsyncExec(
		data: unknown,
		error: DataParserError,
	) {
		let result = await (formattedExec.async as AnyFunction)(data, error, dataParser) as AnyValue;

		if (result === SymbolDataParserErrorIssue) {
			addIssue(error, dataParser as never, data);

			return SymbolDataParserError;
		} else if (result === SymbolDataParserErrorPromiseIssue) {
			addPromiseIssue(error, dataParser as never, data);

			return SymbolDataParserError;
		} else if (
			result !== SymbolDataParserError
			&& dataParser.definition.checkers.length
		) {
			for (const checker of dataParser.definition.checkers) {
				const checkerResult = checker.exec(result, checker);

				if (checkerResult === SymbolDataParserErrorIssue) {
					addIssue(error, checker as never, result);

					return SymbolDataParserError;
				} else {
					result = checkerResult;
				}
			}
		}

		return result;
	}

	const dataParser = (kind as KindHandler).setTo(
		dataParserKind.setTo<Record<keyof RemoveKind<DataParser>, any>>(
			{
				...params,
				exec: middleExec,
				asyncExec: middleAsyncExec,
				parse(data: unknown) {
					const error = createError();
					const result = middleExec(data, error);

					if (result === SymbolDataParserError) {
						return DEither.error(error);
					}

					return DEither.success(result);
				},
				async asyncParse(data: unknown) {
					const error = createError();
					const result = await middleAsyncExec(data, error);

					if (result === SymbolDataParserError) {
						return DEither.error(error);
					}

					return DEither.success(result);
				},
				addChecker: (...checkers: any[]) => dataParserInit(
					kind,
					simpleClone({
						...params,
						definition: {
							...params.definition,
							checkers: [...params.definition.checkers, ...checkers],
						},
					}),
					exec,
				),
				clone: () => dataParserInit(
					kind,
					simpleClone(params),
					exec,
				),
			},
			null as never,
		),
	) as unknown as DataParser;

	return dataParser as never;
}

export type Output<
	GenericDataParser extends DataParser,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["output"];

export type Input<
	GenericDataParser extends DataParser,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["input"];

export type Contract<
	GenericOutput extends unknown,
	GenericInput extends unknown = GenericOutput,
> = DataParser<
	DataParserDefinition<never>,
	GenericOutput,
	GenericInput
>;
