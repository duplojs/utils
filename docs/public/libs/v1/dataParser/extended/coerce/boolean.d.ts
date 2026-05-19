import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../../common";
import { type MergeDefinition, type PrepareDataParserDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "../";
export declare function boolean<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean, "coerce"> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean, "coerce">, GenericDefinition>): dataParsersExtended.DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
