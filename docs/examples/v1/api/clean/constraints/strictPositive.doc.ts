import { type ExpectType, C, DP } from "@duplojs/utils";

const Rating = C.createNewType("rating", DP.number(), C.StrictPositive);

const rating = Rating.createOrThrow(1);

type check = ExpectType<
	typeof rating,
	C.NewType<"rating", 1, "strict-positive">,
	"strict"
>;
