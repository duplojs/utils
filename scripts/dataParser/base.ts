import { type AnyFunction, type ComputedTypeError, createErrorKind, createOverride, type GetKind, type GetKindHandler, type GetKindValue, type IsEqual, keyWrappedValue, type Kind, type KindHandler, kindHeritage, type OverrideHandler, pipe, type RemoveKind, simpleClone } from "@scripts/common";
import { createError, SymbolDataParserError, type DataParserError } from "./error";
import * as DEither from "@scripts/either";
import { createDataParserKind } from "./kind";
export { SymbolDataParserError } from "./error";

export const checkerKind = createDataParserKind("checker");

export interface DataParserCheckerDefinition {
	readonly errorMessage?: string;
}

export interface DataParserChecker<
	GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
	GenericInput extends unknown = unknown,
> extends Kind<typeof checkerKind.definition> {
	readonly definition: GenericDefinition;
	exec<
		GenericOutput extends GenericInput,
	>(
		data: GenericInput,
		error: DataParserError,
		self: this,
		dataParser: DataParserBase
	): GenericOutput | SymbolDataParserError;
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
	) =>
		| InputChecker<GenericDataParserChecker>
		| SymbolDataParserError,
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

export interface DataParserBase<
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
	addChecker(...args: never): DataParserBase;

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
			: [] & ComputedTypeError<"Contract error.">
	): DataParser<GenericValue>;

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
	GenericDataParser extends DataParserBase,
> {
	sync(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]):(
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserError
	);
	async(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): Promise<
		| GetKindValue<
			typeof dataParserKind,
			GenericDataParser
		>["output"]
		| SymbolDataParserError
	>;

	isAsynchronous(self: GenericDataParser): boolean;
}

// This allows for better performance WTF ???
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

export function dataParserBaseInit<
	GenericDataParser extends DataParserBase,
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

		if (
			result !== SDPE
			&& self.definition.checkers.length
		) {
			for (const checker of self.definition.checkers) {
				const checkerResult = checker.exec(result, error, checker, self);

				if (checkerResult === SDPE) {
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

		if (
			result !== SDPE
			&& self.definition.checkers.length
		) {
			for (const checker of self.definition.checkers) {
				const checkerResult = checker.exec(result, error, checker, self);

				if (checkerResult === SDPE) {
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
			addChecker: (...checkers: any[]) => dataParserBaseInit(
				kind,
				{
					...definition,
					checkers: [...definition.checkers, ...checkers],
				},
				exec,
				specificOverrideHandler,
			),
			clone: () => dataParserBaseInit(
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
		} satisfies Record<keyof RemoveKind<DataParserBase>, any>,
		(value) => dataParserKind.setTo(value, null as never),
		kind.setTo,
		(value) => dataParserBaseInit.overrideHandler.apply(value as never),
		(value) => specificOverrideHandler.apply(value as never),
	);

	return self;
}

dataParserBaseInit.overrideHandler = createOverride<DataParserBase>("@duplojs/utils/data-parser/base");

/**
 * @deprecated use dataParserBaseInit
 */
export const dataParserInit = dataParserBaseInit;

export type Output<
	GenericDataParser extends DataParserBase,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["output"];

export type Input<
	GenericDataParser extends DataParserBase,
> = GetKindValue<
	typeof dataParserKind,
	GenericDataParser
>["input"];

export interface DataParser<
	GenericOutput extends unknown = unknown,
	GenericInput extends unknown = GenericOutput,
> extends DataParserBase<
		DataParserDefinition,
		GenericOutput,
		GenericInput
	> {
	addChecker(
		...args: DataParserChecker<
			DataParserCheckerDefinition,
			GenericOutput
		>[]
	): DataParser<GenericOutput, GenericInput>;
}

export type Contract<
	GenericDataParser extends DataParserBase,
> = (
	& GetKind<GenericDataParser>
	& Omit<RemoveKind<DataParserBase>, "addChecker" | "clone" | "definition">
	& Pick<GenericDataParser, "definition">
	& {
		addChecker(...args: never): Contract<GenericDataParser>;
		clone(): Contract<GenericDataParser>;
	}
);
