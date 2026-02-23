import { D } from "@duplojs/utils";

const inputDate = D.create("2024-01-03");
const referenceDate = D.create("2024-01-01");

const difference = D.getDifference(inputDate, referenceDate);
// difference: TheTime

const backwardMilliseconds = D.getDifference(
	"date0+",
	"date1000+",
).toNative();
// backwardMilliseconds: -1000
