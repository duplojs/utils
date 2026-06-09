import type * as DCommon from "../../common";
import { type DataParserDefinition, type DataParserBase, type dataParserKind } from "../base";
import { type dataParserExtendedKind, type DataParserBaseExtended } from "../extended/base";
import { type CheckedConstructorKind } from "./baseInit";
import { type DataParserError } from "../error";
export type DataParserExtendedBaseInit<GenericParentConstructor extends DCommon.SimplifyTopLevel<ReturnType<typeof DataParserBase.init>>> = ((abstract new <GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput>(definition: GenericDefinition) => (DataParserBaseExtended<GenericDefinition, GenericOutput, GenericInput> & DCommon.Kind<GenericParentConstructor["specificKindHandler"]["definition"]> & {
    checkConstructor<GenericConstructor extends object>(constructor: (GenericConstructor & DCommon.RequireConstructor<GenericConstructor> & (GenericConstructor extends (DCommon.AnyConstructor<[any], (DCommon.Kind<typeof dataParserKind.definition> & DCommon.Kind<typeof dataParserExtendedKind.definition> & DCommon.Kind<GenericParentConstructor["specificKindHandler"]["definition"]>)> & {
        create(...args: never[]): (DCommon.Kind<typeof dataParserKind.definition> & DCommon.Kind<typeof dataParserExtendedKind.definition> & DCommon.Kind<GenericParentConstructor["specificKindHandler"]["definition"]>);
        execParse(self: (DCommon.Kind<typeof dataParserKind.definition> & DCommon.Kind<GenericParentConstructor["specificKindHandler"]["definition"]>), data: unknown, error: DataParserError): unknown;
        dataParserIsAsynchronous(self: (DCommon.Kind<typeof dataParserKind.definition> & DCommon.Kind<GenericParentConstructor["specificKindHandler"]["definition"]>)): boolean;
        prepareDefinition(...args: never[]): DataParserDefinition;
    }) ? unknown : DCommon.ComputedTypeError<"Function create, execParse, dataParserIsAsynchronous or prepareDefinition are incorrect.">))): (GenericConstructor & CheckedConstructorKind);
})) & {
    [Prop in Exclude<keyof typeof DataParserBaseExtended, DCommon.ClearClassKeys>]: typeof DataParserBaseExtended[Prop];
} & {
    execParse: GenericParentConstructor["execParse"];
    dataParserIsAsynchronous: GenericParentConstructor["dataParserIsAsynchronous"];
    prepareDefinition: GenericParentConstructor["prepareDefinition"];
    create: GenericParentConstructor["create"];
    specificKindHandler: GenericParentConstructor["specificKindHandler"];
});
