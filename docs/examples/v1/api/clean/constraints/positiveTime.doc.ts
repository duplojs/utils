import { C, D, DP, type ExpectType } from "@duplojs/utils";

const Overtime = C.createNewType("overtime", DP.time(), C.PositiveTime);

const overtime = Overtime.createOrThrow(D.createTime(3, "hour"));

type check = ExpectType<
	typeof overtime,
	C.NewType<"overtime", D.TheTime, "positive-time">,
	"strict"
>;
