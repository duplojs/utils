import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function number<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber, "coerce">, GenericDefinition>): dataParsers.DataParserNumber<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
