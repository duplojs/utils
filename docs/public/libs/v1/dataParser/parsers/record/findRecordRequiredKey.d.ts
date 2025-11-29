import { type DataParserRecordKey } from ".";
import { type TemplateLiteralParts } from "../templateLiteral";
export declare function findRecordRequiredKeyOnTemplateLiteralPart(templatePart: readonly TemplateLiteralParts[]): string[] | null;
export declare function findRecordRequiredKey(keyParser: DataParserRecordKey): string[] | null;
