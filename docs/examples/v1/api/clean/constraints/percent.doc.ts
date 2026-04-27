import { type ExpectType, C, DP } from "@duplojs/utils";

const Progress = C.createNewType("progress", DP.number(), C.Percent);

const progress = Progress.createOrThrow(100);

type check = ExpectType<
	typeof progress,
	C.NewType<"progress", 100, "number-min-0" | "number-max-100">,
	"strict"
>;
