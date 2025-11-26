import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.toTimestamp(input);
// result: 1718841600000
