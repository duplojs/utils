import { DDate } from "@duplojs/utils";

const inputs = [
	DDate.create("2024-06-01"),
	DDate.create("2024-06-10"),
	DDate.create("2024-06-20"),
] as const;

const target = DDate.create("2024-06-15");
const result = DDate.closestTo(inputs, target);
// result: "date1717996800000+" (10 juin 2024)
