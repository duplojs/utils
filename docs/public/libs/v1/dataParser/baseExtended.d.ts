import { type Kind, type NeverCoalescing, type AnyFunction, type SimplifyTopLevel, type AnyValue } from "../common";
import { type MergeDefinition } from "./types";
import { type Output, type DataParser } from "./base";
import * as dataParsers from "./parsers";
import * as dataParsersExtended from "./extended";
import { type DataParserError } from "./error";
export declare const extendedKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/extended", unknown>>;
type _DataParserExtended = (DataParser & Kind<typeof extendedKind.definition>);
export interface DataParserExtended extends _DataParserExtended {
    array<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionArray, "element">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
        element: GenericThis;
    }>>;
    transform<GenericThis extends this = this, GenericOutput extends AnyValue = AnyValue, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">> = never>(theFunction: (input: Output<GenericThis>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): dataParsersExtended.DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        theFunction(input: Output<GenericThis>): GenericOutput;
    }>>;
    arrayCoalescing<GenericThis extends this = this>(): dataParsersExtended.DataParserUnionExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionUnion, "options"> & {
        readonly options: [
            dataParsersExtended.DataParserArrayExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionArray, "element"> & {
                readonly element: GenericThis;
            }>>,
            dataParsersExtended.DataParserTransformExtended<SimplifyTopLevel<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction"> & {
                readonly inner: GenericThis;
                theFunction(input: Output<GenericThis>, error: DataParserError): Output<GenericThis>[];
            }>>
        ];
    }>>;
    pipe<GenericThis extends this = this, GenericOutput extends DataParser = DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionPipe, "input" | "output">> = never>(output: GenericOutput, definition?: GenericDefinition): dataParsersExtended.DataParserPipeExtended<MergeDefinition<dataParsers.DataParserDefinitionPipe, NeverCoalescing<GenericDefinition, {}> & {
        input: GenericThis;
        output: GenericOutput;
    }>>;
    nullable<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNullable<Output<GenericThis> | null>, "inner">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
    }>>;
    optional<GenericThis extends this = this, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionOptional<Output<GenericThis> | undefined>, "inner">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
    }>>;
    or<GenericThis extends this = this, GenericDataParser extends DataParser = DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionUnion, "options">> = never>(option: GenericDataParser, definition?: GenericDefinition): dataParsersExtended.DataParserUnionExtended<MergeDefinition<dataParsers.DataParserDefinitionUnion, NeverCoalescing<GenericDefinition, {}> & {
        options: [GenericThis, GenericDataParser];
    }>>;
    refine(...args: never): DataParserExtended;
    recover<GenericThis extends this = this, GenericRecoveredValue extends unknown = unknown, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">> = never>(recoveredValue: GenericRecoveredValue, definition?: GenericDefinition): dataParsersExtended.DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
        inner: GenericThis;
        recoveredValue: GenericRecoveredValue;
    }>>;
}
export declare function dataParserExtendedInit<GenericDataParser extends DataParser, GenericDataParserExtended extends GenericDataParser & DataParserExtended>(dataParser: NoInfer<GenericDataParser>, rest: NoInfer<{
    [Prop in Exclude<keyof GenericDataParserExtended, keyof (GenericDataParser & DataParserExtended)>]: GenericDataParserExtended[Prop] extends AnyFunction ? (self: GenericDataParserExtended, ...args: Parameters<GenericDataParserExtended[Prop]>) => ReturnType<GenericDataParserExtended[Prop]> : GenericDataParserExtended[Prop];
}>): GenericDataParserExtended;
export declare namespace dataParserExtendedInit {
    var overrideHandler: import("../common").OverrideHandler<DataParserExtended>;
}
export {};
