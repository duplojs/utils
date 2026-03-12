import { type DataParserRecordKey } from ".";
import { type TemplateLiteralParts } from "../templateLiteral";
export declare function findRecordRequiredKeyOnTemplateLiteralPart(templatePart: readonly TemplateLiteralParts[]): readonly string[];
export declare function findRecordRequiredKey(keyParser: DataParserRecordKey): readonly string[];
