import { D, pipe } from "@scripts";

const theTime = D.createTheTime(788_645_006);
const fullFormat = D.formatTime(theTime, "WW DD HH:mm:ss.SSS");
// fullFormat: "01 02 03:04:05.006"

pipe(
	theTime,
	D.formatTime("HH:mm"),
); // result: "03:04"

const negativeTime = D.createTheTime(-5_000);
const shortFormat = D.formatTime(negativeTime, "ss.SSS");
// shortFormat: "-05.000"
