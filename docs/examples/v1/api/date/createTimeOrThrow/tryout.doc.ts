import { D } from "@duplojs/utils";

const fromMilliseconds = D.createTimeOrThrow(2000);
// fromMilliseconds: "time2000+"

const fromSpooling = D.createTimeOrThrow({
	hour: 1,
	minute: 30,
});
// fromSpooling: "time5400000+"

const fromTheTime = D.createTimeOrThrow("time90-");
// fromTheTime: "time90-"
