import { detachObjectMethod } from "@scripts/common";
import { DataParserCoercerExtended } from "./base";

/**
 * {@include dataParser/extended/coercer/index.md}
 */
export const coercer = detachObjectMethod(DataParserCoercerExtended, "create");
