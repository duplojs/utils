import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function bigint<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionBigInt, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserBigInt<MergeDefinition<dataParsers.DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
