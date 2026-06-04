import type * as DCommon from "@scripts/common";
import { type DataParserDefinition, type DataParserBase, type dataParserKind } from "../base";
import { type DataParserError } from "../error";

export type CheckedConstructorKind = DCommon.Kind<{
	name: "checked-constructor";
	value: never;
}>;

export type DataParserBaseInit<
	GenericKindHandler extends DCommon.KindHandler,
> = (
	& (
		abstract new<
			GenericDefinition extends DataParserDefinition = DataParserDefinition,
			GenericOutput extends unknown = unknown,
			GenericInput extends unknown = GenericOutput,
		>(definition: GenericDefinition) => (
			& DataParserBase<
				GenericDefinition,
				GenericOutput,
				GenericInput
			>
			& DCommon.Kind<GenericKindHandler["definition"]>
			& {
				checkConstructor<
					GenericConstructor extends object,
				>(
					constructor: (
						GenericConstructor
						& DCommon.RequireConstructor<GenericConstructor>
						& (
							GenericConstructor extends (
								& DCommon.AnyConstructor<[any], (
									& DCommon.Kind<typeof dataParserKind.definition>
									& DCommon.Kind<GenericKindHandler["definition"]>
								)>
								& {
									create(...args: never[]): (
										& DCommon.Kind<typeof dataParserKind.definition>
										& DCommon.Kind<GenericKindHandler["definition"]>
									);
									execParse(
										self: (
											& DCommon.Kind<typeof dataParserKind.definition>
											& DCommon.Kind<GenericKindHandler["definition"]>
										),
										data: unknown,
										error: DataParserError,
									): unknown;
									dataParserIsAsynchronous(
										self: (
											& DCommon.Kind<typeof dataParserKind.definition>
											& DCommon.Kind<GenericKindHandler["definition"]>
										),
									): boolean;
									prepareDefinition(
										...args: any[]
									): DataParserDefinition;
								}
							)
								? (
									& (
										DCommon.IsEqual<
											Parameters<GenericConstructor["prepareDefinition"]>[0],
											never
										> extends true
											? DCommon.ComputedTypeError<"Missing declaration prepareDefinition function">
											: unknown
									)
									& (
										DCommon.IsExtends<
											Parameters<GenericConstructor["dataParserIsAsynchronous"]>[0],
											DCommon.Kind<GenericKindHandler["definition"]>
										> extends true
											? unknown
											: DCommon.ComputedTypeError<"Self argument of dataParserIsAsynchronous function has wrong type.">
									)
									& (
										DCommon.IsExtends<
											Parameters<GenericConstructor["execParse"]>[0],
											DCommon.Kind<GenericKindHandler["definition"]>
										> extends true
											? unknown
											: DCommon.ComputedTypeError<"Self argument of execParse function has wrong type.">
									)
								)
								: DCommon.ComputedTypeError<"Function create, execParse, dataParserIsAsynchronous or prepareDefinition are incorrect.">
						)
					),
				): (
					& GenericConstructor
					& CheckedConstructorKind
				);
			}
		)
	)
	& {
		[Prop in Exclude<keyof typeof DataParserBase, DCommon.ClearClassKeys>]: typeof DataParserBase[Prop]
	}
	& {
		specificKindHandler: GenericKindHandler;
	}
);
