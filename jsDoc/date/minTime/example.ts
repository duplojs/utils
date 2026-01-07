import { D } from "@scripts";

const result = D.minTime([
	D.createTheTime(3_000),
	D.createTheTime(1_000),
	D.createTheTime(2_000),
]);
// result: "time1000+"

const result2 = D.minTime([
	"time3000-",
	"time1000-",
] as const);
// result2: "time3000-"

const result3 = D.minTime([
	"time500+",
	"time100+",
] as const);
// result3: "time100+"
