import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function empty<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty, "coerce">, GenericDefinition>): dataParsers.DataParserEmpty<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
