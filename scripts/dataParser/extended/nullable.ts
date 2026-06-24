import { detachObjectMethod } from "@scripts/common";
import { DataParserNullableExtended } from "./base";

/**
 * {@include dataParser/extended/nullable/index.md}
 */
export const nullable = detachObjectMethod(DataParserNullableExtended, "create");
