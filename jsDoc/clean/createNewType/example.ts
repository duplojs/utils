import { C, DP, E } from "@scripts";

const UserId = C.createNewType(
	"user-id",
	DP.number(),
	C.Positive,
);

type UserId = C.GetNewType<typeof UserId>;

const userId = UserId.createOrThrow(42);

const result = UserId.create(12);

const fromPrimitive = UserId.createOrThrow(
	C.Number.createOrThrow(5),
);

UserId.is(result); // type guard

const unknownValue: unknown = 20;
const maybe = UserId.createWithUnknown(unknownValue);

if (E.isRight(maybe)) {
	// maybe: E.EitherRight<"createNewType", UserId>
}

const strictValue = UserId.createWithUnknownOrThrow(unknownValue);
