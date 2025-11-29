import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import type * as dataParsers from "../../parsers";
import * as dataParsersExtended from "..";
export declare function bigint<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionBigInt, "coerce">> = never>(definition?: GenericDefinition): dataParsersExtended.DataParserBigIntExtended<MergeDefinition<dataParsers.DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
