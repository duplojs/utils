import { C, D, type ExpectType } from "@duplojs/utils";

const time01 = C.Time.createOrThrow(D.createTime(1000, "millisecond"));
const time05 = C.Time.createOrThrow(D.createTime(5000, "millisecond"));
const time10 = C.Time.createOrThrow(D.createTime(10000, "millisecond"));

const result = C.timeMax([time01, time05, time10]);

type check = ExpectType<
	typeof result,
	C.Primitive<D.TheTime>,
	"strict"
>;

