import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function string<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionString, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserString<MergeDefinition<dataParsers.DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
