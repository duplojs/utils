import { DDate } from "@duplojs/utils";

const input = DDate.create("2023-11-14");
const result = DDate.toNative(input);
// result: Date { time: 1699920000000 }
