import { type ExpectType, C, DP } from "@duplojs/utils";

const ShortTitle = C.createNewType("short-title", DP.string(), C.StringMax(10));

const title = ShortTitle.createOrThrow("Hello");

type check = ExpectType<
	typeof title,
	C.NewType<"short-title", "Hello", "string-max-10">,
	"strict"
>;
