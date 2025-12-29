import { type AnyFunction, createOverride, type GetKindHandler, type GetKindValue, keyWrappedValue, type Kind, type KindHandler, pipe, type RemoveKind, simpleClone } from "@scripts/common";
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
	GenericInput extends unknown = unknown,
> extends Kind<typeof checkerKind.definition, GenericInput> {
	readonly definition: GenericDefinition;
	exec(data: GenericInput, self: this): GenericInput | SymbolDataParserErrorIssue;
}

export type InputChecker<
	GenericDataParser extends DataParserChecker,
> = Parameters<GenericDataParser["exec"]>[0];

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
	readonly checkers: readonly GenericChecker[];
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

	/**
	 * @deprecated Method with unreliable typing.
	 */
	construct(definition: never): DataParser;
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

// This allows for better performance WTF ???
const SDPEI = SymbolDataParserErrorIssue;
const SDPEPI = SymbolDataParserErrorPromiseIssue;
const SDPE = SymbolDataParserError;

const DPE = createError();
const EE = DEither.error(null);
const ES = DEither.success(null);
const KWV = keyWrappedValue;

export function dataParserInit<
	GenericDataParser extends DataParser,
>(
	kind: Exclude<
		GetKindHandler<GenericDataParser>,
		typeof dataParserKind
	>,
	definition: GenericDataParser["definition"],
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
		let result = (formattedExec.sync as AnyFunction)(data, error, dataParser) as unknown;

		if (result === SDPEI) {
			addIssue(error, dataParser as never, data);

			return SDPE;
		} else if (result === SDPEPI) {
			addPromiseIssue(error, dataParser as never, data);

			return SDPE;
		} else if (
			result !== SDPE
			&& dataParser.definition.checkers.length
		) {
			for (const checker of dataParser.definition.checkers) {
				const checkerResult = checker.exec(result, checker);

				if (checkerResult === SDPEI) {
					addIssue(error, checker as never, result);

					return SDPE;
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
		let result = await (formattedExec.async as AnyFunction)(data, error, dataParser) as unknown;

		if (result === SDPEI) {
			addIssue(error, dataParser as never, data);

			return SDPE;
		} else if (result === SDPEPI) {
			addPromiseIssue(error, dataParser as never, data);

			return SDPE;
		} else if (
			result !== SDPE
			&& dataParser.definition.checkers.length
		) {
			for (const checker of dataParser.definition.checkers) {
				const checkerResult = checker.exec(result, checker);

				if (checkerResult === SDPEI) {
					addIssue(error, checker as never, result);

					return SDPE;
				} else {
					result = checkerResult;
				}
			}
		}

		return result;
	}

	const dataParser = pipe(
		{
			definition,
			exec: middleExec,
			asyncExec: middleAsyncExec,
			parse(data: unknown) {
				const error = {
					...DPE,
					issues: [],
					currentPath: [],
				};
				const result = middleExec(data, error);

				if (result === SDPE) {
					return {
						...EE,
						[KWV]: error,
					} as DEither.EitherError<any>;
				}

				return {
					...ES,
					[KWV]: result,
				} as DEither.EitherSuccess<any>;
			},
			async asyncParse(data: unknown) {
				const error = {
					...DPE,
					issues: [],
					currentPath: [],
				};
				const result = await middleAsyncExec(data, error);

				if (result === SDPE) {
					return {
						...EE,
						[KWV]: error,
					} as DEither.EitherError<any>;
				}

				return {
					...ES,
					[KWV]: result,
				} as DEither.EitherSuccess<any>;
			},
			addChecker: (...checkers: any[]) => dataParserInit(
				kind,
				simpleClone({
					...definition,
					checkers: [...definition.checkers, ...checkers],
				}),
				exec,
			),
			clone: () => dataParserInit(
				kind,
				simpleClone(definition),
				exec,
			),
			construct: (definition: never) => dataParserInit(
				kind,
				definition,
				exec,
			),
		} satisfies Record<keyof RemoveKind<DataParser>, any>,
		(value) => dataParserKind.setTo(value, null as never),
		kind.setTo,
		dataParserInit.overrideHandler.apply,
	);

	return dataParser as never;
}

dataParserInit.overrideHandler = createOverride<DataParser>("@duplojs/utils/data-parser/base");

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
