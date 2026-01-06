import { D } from "@duplojs/utils";

const timeA = D.createTime(2, "second");
// timeA: "time2000+"

const timeB = D.createTime({
	hour: 1,
	minute: 30,
	second: 15,
});
// timeB: "time5415000+"

const timeC = D.createTime({
	value: "01:02:03.004",
});
// timeC: "time3723004+"

const timeD = D.createTime(-500);
// timeD: "time500-"
