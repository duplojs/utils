import * as DCommon from "@scripts/common";
import { type SymbolDataParserError, type DataParserError } from "./error";
import { createDataParserKind } from "./kind";
import { type DataParser } from "./base";

export const checkerKind = createDataParserKind("checker");

export interface DataParserCheckerDefinition {
	readonly errorMessage?: string;
}

export abstract class DataParserCheckerBase<
	GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
	GenericInput extends unknown = unknown,
> extends DCommon.kindClass(checkerKind) {
	public readonly definition: GenericDefinition;

	public constructor(definition: GenericDefinition) {
		super(null as never);
		this.definition = definition;
	}

	public abstract get classConstructor(): (
		& DCommon.AnyConstructor<[any], DataParserCheckerBase<any>>
		& {
			create(...args: never[]): DataParserCheckerBase<any>;
			execCheck(
				data: GenericInput,
				error: DataParserError,
				self: DataParserCheckerBase<any>,
				dataParser: DataParser,
			): unknown;
		}
	);

	private execCheck(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	): unknown {
		const execCheck = this.classConstructor.execCheck;
		const self = this as never;
		this.execCheck = (data, error, dataParser) => execCheck(data, error, self, dataParser);
		return this.execCheck(data, error, dataParser);
	}

	public exec<
		GenericOutput extends GenericInput,
	>(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	): DCommon.MaybePromise<
		| GenericOutput
		| SymbolDataParserError
	>;

	public exec(
		data: GenericInput,
		error: DataParserError,
		dataParser: DataParser,
	) {
		return this.execCheck(data, error, dataParser);
	}

	public abstract isAsynchronous(): boolean;

	public static init<
		GenericKindHandler extends DCommon.KindHandler,
	>(
		kindHandler: GenericKindHandler,
	) {
		type CheckedConstructorKind = & DCommon.Kind<{
			name: "checked-constructor";
			value: never;
		}>;

		abstract class DataParserCheckerBaseInit<
			GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition,
			GenericInput extends unknown = never,
		> extends DCommon.kindClass(
				kindHandler,
				DataParserCheckerBase,
			)<
				DataParserCheckerBase<
					GenericDefinition,
					GenericInput
				>
			> {
			public constructor(
				definition: GenericDefinition,
			) {
				super(null as never, definition);
			}

			public checkConstructor<
				GenericConstructor extends object,
			>(
				constructor: (
					GenericConstructor
					& DCommon.RequireConstructor<GenericConstructor>
					& (
						"execCheck" extends keyof GenericConstructor
							? GenericConstructor["execCheck"] extends DCommon.AnyFunction
								? (
									& (
										DCommon.IsExtends<
											Parameters<GenericConstructor["execCheck"]>[2],
											DCommon.Kind<GenericKindHandler["definition"]>
										> extends true
											? unknown
											: DCommon.ComputedTypeError<"Wrong type of self argument.">
									)
								)
								: unknown
							: unknown
					)
				),
			): GenericConstructor & CheckedConstructorKind {
				return constructor as never;
			}

			public abstract override get classConstructor(): (
				& DCommon.AnyConstructor<[any], DataParserCheckerBase<any> & DCommon.Kind<GenericKindHandler["definition"]>>
				& {
					create(...args: never[]): DataParserCheckerBase<any> & DCommon.Kind<GenericKindHandler["definition"]>;
					execCheck(
						data: GenericInput,
						error: DataParserError,
						self: DataParserCheckerBase<any> & DCommon.Kind<GenericKindHandler["definition"]>,
						dataParser: DataParser,
					): unknown;
				}
				& CheckedConstructorKind
			);

			public declare static create: (
				...args: never[]
			) => unknown;

			public declare static execCheck: (
				data: any,
				error: DataParserError,
				self: any,
				dataParser: DataParser,
			) => unknown;
		}

		return DataParserCheckerBaseInit;
	}
}

export interface DataParserChecker<
	GenericInput extends unknown = unknown,
> extends DataParserCheckerBase<
		DataParserCheckerDefinition,
		GenericInput
	> {

}
