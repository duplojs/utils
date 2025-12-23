import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function number<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNumber, "coerce">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
