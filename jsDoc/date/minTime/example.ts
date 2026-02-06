import { D } from "@scripts";

const value = D.minTime([
	D.createTime(3_000, "millisecond"),
	D.createTime(1_000, "millisecond"),
	"time2000+",
] as const);
// value: TheTime

const value2 = D.minTime([
	"time3000-",
	"time1000-",
] as const);
// value2: TheTime
