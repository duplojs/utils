import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function date<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionDate, "coerce">, GenericDefinition>): dataParsers.DataParserDate<MergeDefinition<dataParsers.DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
