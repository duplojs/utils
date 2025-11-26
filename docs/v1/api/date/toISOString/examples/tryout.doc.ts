import { DDate } from "@duplojs/utils";

const input = DDate.create("2023-11-14");
const result = DDate.toISOString(input);
// result: "2023-11-14T00:00:00.000Z"
