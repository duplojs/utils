import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.getYear(input);
// result: 2024

const result2 = DDate.getYear(input, "Europe/Paris");
// result2: 2024
