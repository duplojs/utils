import { type NeverCoalescing } from "../../../common";
import { type MergeDefinition } from "../../types";
import * as dataParsers from "..";
export declare function nil<const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNil, "coerce">> = never>(definition?: GenericDefinition): dataParsers.DataParserNil<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}> & {
    coerce: true;
}>>;
