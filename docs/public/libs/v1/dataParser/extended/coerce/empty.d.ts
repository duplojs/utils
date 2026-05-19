import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function empty<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionEmpty, "coerce">, GenericDefinition>): dataParsersExtended.DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
