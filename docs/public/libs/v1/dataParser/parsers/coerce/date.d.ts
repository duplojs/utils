import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function date<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionDate, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserDate<MergeDefinition<dataParsers.DataParserDefinitionDate, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
