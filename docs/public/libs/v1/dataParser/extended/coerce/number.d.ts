import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function number<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionNumber, "coerce">, GenericDefinition>): dataParsersExtended.DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
