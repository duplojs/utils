import { D } from "@duplojs/utils";

const theTime = D.createTime(788_645_006, "millisecond");
const fullFormat = D.formatTime(theTime, "WW DD HH:mm:ss.SSS");
// fullFormat: "01 02 03:04:05.006"

const shortFormat = D.formatTime(theTime, "HH:mm");
// shortFormat: "03:04"
