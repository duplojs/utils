import { C, D, unwrap } from "@duplojs/utils";

const time01 = C.Time.createOrThrow(D.createTime(1000, "millisecond"));
const time05 = C.Time.createOrThrow(D.createTime(5000, "millisecond"));
const time10 = C.Time.createOrThrow(D.createTime(10000, "millisecond"));

const result = C.timeMax([time01, time05, time10]);

const output = unwrap(result);
