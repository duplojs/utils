import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function bigint<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionBigInt, "coerce">, GenericDefinition>): dataParsersExtended.DataParserBigIntExtended<MergeDefinition<dataParsers.DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
