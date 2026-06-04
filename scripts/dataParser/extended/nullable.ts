import { detachObjectMethod } from "@scripts/common";
import { DataParserNullableExtended } from "./base";

export const nullable = detachObjectMethod(DataParserNullableExtended, "create");
