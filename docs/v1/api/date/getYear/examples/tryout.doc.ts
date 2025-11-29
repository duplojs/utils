import { D } from "@duplojs/utils";

const input = D.create("2024-06-20");
const result = D.getYear(input);
// result: 2024

const result2 = D.getYear(input, "Europe/Paris");
// result2: 2024
