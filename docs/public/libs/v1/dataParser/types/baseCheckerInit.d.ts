import type * as DCommon from "../../common";
import { type DataParserError } from "../error";
import { type DataParserCheckerDefinition, type checkerKind, type DataParserCheckerBase } from "../baseChecker";
import { type CheckedConstructorKind } from "./baseInit";
import { type DataParser } from "../base";
export type DataParserCheckerBaseInit<GenericKindHandler extends DCommon.KindHandler> = ((abstract new <GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition, GenericInput extends unknown = unknown>(definition: GenericDefinition) => (DataParserCheckerBase<GenericDefinition, GenericInput> & DCommon.Kind<GenericKindHandler["definition"]> & {
    checkConstructor<GenericConstructor extends object>(constructor: (GenericConstructor & DCommon.RequireConstructor<GenericConstructor> & (GenericConstructor extends (DCommon.AnyConstructor<[any], (DCommon.Kind<typeof checkerKind.definition> & DCommon.Kind<GenericKindHandler["definition"]>)> & {
        create(...args: never[]): (DCommon.Kind<typeof checkerKind.definition> & DCommon.Kind<GenericKindHandler["definition"]>);
        execCheck(data: GenericInput, error: DataParserError, self: (DCommon.Kind<typeof checkerKind.definition> & DCommon.Kind<GenericKindHandler["definition"]>), dataParser: DataParser): unknown;
    }) ? ((DCommon.IsExtends<Parameters<GenericConstructor["execCheck"]>[2], DCommon.Kind<GenericKindHandler["definition"]>> extends true ? unknown : DCommon.ComputedTypeError<"Wrong type of self argument.">)) : DCommon.ComputedTypeError<"Function create or execCheck are incorrect.">))): (GenericConstructor & CheckedConstructorKind);
})) & {
    [Prop in Exclude<keyof typeof DataParserCheckerBase, DCommon.ClearClassKeys>]: typeof DataParserCheckerBase[Prop];
} & {
    specificKindHandler: GenericKindHandler;
});
