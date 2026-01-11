import { D } from "@scripts";

const result = D.maxTime([
	D.createTheTime(3_000),
	D.createTheTime(1_000),
	D.createTheTime(2_000),
]);
// result: "time3000+"

const result2 = D.maxTime([
	"time3000-",
	"time1000-",
] as const);
// result2: "time1000-"

const result3 = D.maxTime([
	"time500+",
	"time100+",
] as const);
// result3: "time500+"
