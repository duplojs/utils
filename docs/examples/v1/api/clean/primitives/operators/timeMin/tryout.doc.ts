import { C, D, unwrap } from "@duplojs/utils";

const time01 = C.Time.createOrThrow(D.createTime(1000));
const time05 = C.Time.createOrThrow(D.createTime(5000));
const time10 = C.Time.createOrThrow(D.createTime(10000));

const result = C.timeMin([time10, time05, time01]);

const output = unwrap(result);
