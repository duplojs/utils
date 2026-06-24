import { detachObjectMethod } from "@scripts/common";
import { DataParserOptionalExtended } from "./base";

/**
 * {@include dataParser/extended/optional/index.md}
 */
export const optional = detachObjectMethod(DataParserOptionalExtended, "create");
