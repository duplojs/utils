import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function boolean<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean, "coerce">, GenericDefinition>): dataParsers.DataParserBoolean<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
