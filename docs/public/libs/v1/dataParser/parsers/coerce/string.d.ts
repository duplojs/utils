import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function string<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionString, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionString, "coerce">, GenericDefinition>): dataParsers.DataParserString<MergeDefinition<dataParsers.DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
