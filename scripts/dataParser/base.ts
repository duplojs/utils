import { type AnyFunction, createErrorKind, createOverride, type GetKind, type GetKindHandler, type GetKindValue, type IsEqual, keyWrappedValue, type Kind, type KindHandler, kindHeritage, type OverrideHandler, pipe, type RemoveKind, simpleClone, type SimplifyTopLevel } from "@scripts/common";
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

declare const SymbolContractError: unique symbol;

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

	/**
	 * {@include dataParser/classic/base/parse/index.md}
	 */
	parse(
		data: unknown,
	): DEither.Success<GenericOutput> | DEither.Error<DataParserError>;

	/**
	 * {@include dataParser/classic/base/asyncParse/index.md}
	 */
	asyncParse(
		data: unknown,
	): Promise<
		| DEither.Success<GenericOutput>
		| DEither.Error<DataParserError>
	>;

	/**
	 * {@include dataParser/classic/base/addChecker/index.md}
	 */
	addChecker(...args: never): DataParser;

	/**
	 * {@include dataParser/classic/base/clone/index.md}
	 */
	clone(): this;

	/**
	 * {@include dataParser/classic/base/contract/index.md}
	 */
	contract<
		GenericValue extends unknown,
	>(
		...args: IsEqual<Output<this>, GenericValue> extends true
			? []
			: [] & { [SymbolContractError]: "Contract error." }
	): Contract<GenericValue>;

	/**
	 * {@include dataParser/classic/base/parseOrThrow/index.md}
	 */
	parseOrThrow(
		data: unknown,
	): GenericOutput;

	/**
	 * {@include dataParser/classic/base/asyncParseOrThrow/index.md}
	 */
	asyncParseOrThrow(
		data: unknown,
	): Promise<GenericOutput>;

	/**
	 * {@include dataParser/classic/base/isAsynchronous/index.md}
	 */
	isAsynchronous(): boolean;
}

interface DataParserInitExecParams<
	GenericDataParser extends DataParser,
> {
	sync(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]):(
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserError
		| SymbolDataParserErrorIssue
		| SymbolDataParserErrorPromiseIssue
	);
	async(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): Promise<
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserError
		| SymbolDataParserErrorIssue
		| SymbolDataParserErrorPromiseIssue
	>;

	isAsynchronous(self: GenericDataParser): boolean;
}

// This allows for better performance WTF ???
const SDPEI = SymbolDataParserErrorIssue;
const SDPEPI = SymbolDataParserErrorPromiseIssue;
const SDPE = SymbolDataParserError;

const DPE = createError();
const EE = DEither.error(null);
const ES = DEither.success(null);
const KWV = keyWrappedValue;

export class DataParserThrowError extends kindHeritage(
	"dataParserThrowError",
	createErrorKind("dataParserThrowError"),
	Error,
) {
	public constructor(
		public value: unknown,
	) {
		super({}, ["Parse Error."]);
	}
}

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
	specificOverrideHandler: OverrideHandler<GenericDataParser>,
): GenericDataParser {
	const formattedExec = typeof exec === "object"
		? exec
		: {
			sync: exec,
			async: exec,
			isAsynchronous: () => false,
		};

	function middleExec(
		data: unknown,
		error: DataParserError,
	) {
		let result = (formattedExec.sync as AnyFunction)(data, error, self) as unknown;

		if (result === SDPEI) {
			addIssue(error, self as never, data);

			return SDPE;
		} else if (result === SDPEPI) {
			addPromiseIssue(error, self as never, data);

			return SDPE;
		} else if (
			result !== SDPE
			&& self.definition.checkers.length
		) {
			for (const checker of self.definition.checkers) {
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
		let result = await (formattedExec.async as AnyFunction)(data, error, self) as unknown;

		if (result === SDPEI) {
			addIssue(error, self as never, data);

			return SDPE;
		} else if (result === SDPEPI) {
			addPromiseIssue(error, self as never, data);

			return SDPE;
		} else if (
			result !== SDPE
			&& self.definition.checkers.length
		) {
			for (const checker of self.definition.checkers) {
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

	const self: GenericDataParser = pipe(
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
					} as DEither.Error<any>;
				}

				return {
					...ES,
					[KWV]: result,
				} as DEither.Success<any>;
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
					} as DEither.Error<any>;
				}

				return {
					...ES,
					[KWV]: result,
				} as DEither.Success<any>;
			},
			addChecker: (...checkers: any[]) => dataParserInit(
				kind,
				simpleClone({
					...definition,
					checkers: [...definition.checkers, ...checkers],
				}),
				exec,
				specificOverrideHandler,
			),
			clone: () => dataParserInit(
				kind,
				simpleClone(definition),
				exec,
				specificOverrideHandler,
			),
			contract: () => self,
			parseOrThrow(data: unknown) {
				const error = {
					...DPE,
					issues: [],
					currentPath: [],
				};
				const result = middleExec(data, error);

				if (result === SDPE) {
					throw new DataParserThrowError(error);
				}

				return result;
			},
			async asyncParseOrThrow(data: unknown) {
				const error = {
					...DPE,
					issues: [],
					currentPath: [],
				};
				const result = await middleAsyncExec(data, error);

				if (result === SDPE) {
					throw new DataParserThrowError(error);
				}

				return result;
			},
			isAsynchronous() {
				return formattedExec.isAsynchronous(self);
			},
		} satisfies Record<keyof RemoveKind<DataParser>, any>,
		(value) => dataParserKind.setTo(value, null as never),
		kind.setTo,
		(value) => dataParserInit.overrideHandler.apply(value as never),
		(value) => specificOverrideHandler.apply(value as never),
	);

	return self;
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
	DataParserDefinition,
	GenericOutput,
	GenericInput
>;

export type AdvancedContract<
	GenericDataParser extends DataParser,
> = (
	& GetKind<GenericDataParser>
	& Omit<RemoveKind<DataParser>, "addChecker" | "clone" | "definition">
	& Pick<GenericDataParser, "definition">
	& {
		addChecker(...args: never): AdvancedContract<GenericDataParser>;
		clone(): AdvancedContract<GenericDataParser>;
	}
);
