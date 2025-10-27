import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function boolean<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionBoolean, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserBoolean<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
