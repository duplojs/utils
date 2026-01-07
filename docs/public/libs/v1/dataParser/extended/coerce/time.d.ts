import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function time<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTime, "coerce">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserTimeExtended<MergeDefinition<dataParsers.DataParserDefinitionTime, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
