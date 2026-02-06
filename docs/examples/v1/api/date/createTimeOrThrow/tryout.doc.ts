import { D } from "@duplojs/utils";

const fromMilliseconds = D.createTimeOrThrow(2000);
// fromMilliseconds: TheTime

const fromSpooling = D.createTimeOrThrow({
	hour: 1,
	minute: 30,
});
// fromSpooling: TheTime

const fromTheTime = D.createTimeOrThrow("time90-");
// fromTheTime: TheTime
