import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function number<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNumber, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserNumber<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
