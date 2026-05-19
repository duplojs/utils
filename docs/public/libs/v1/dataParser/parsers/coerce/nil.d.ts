import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import * as dataParsers from "..";
export declare function nil<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNil, "coerce">, GenericDefinition>): dataParsers.DataParserNil<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
