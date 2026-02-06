import { D, pipe } from "@scripts";

const input = D.createTime(788_645_006, "millisecond");
const full = D.formatTime(input, "WW DD HH:mm:ss.SSS");
// full: string

pipe(
	input,
	D.formatTime("HH:mm"),
); // string

const negative = D.createTime(-5_000, "millisecond");
const short = D.formatTime(negative, "ss.SSS");
// short: string
