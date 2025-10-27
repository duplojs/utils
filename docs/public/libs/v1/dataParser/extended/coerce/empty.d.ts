import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function empty<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionEmpty, "coerce">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
