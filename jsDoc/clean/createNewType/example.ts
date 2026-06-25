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

const UserName = C.createNewType(
	"user-name",
	C.String,
	C.StringMin(2),
);

type UserName = C.GetNewType<typeof UserName>;

const userName = UserName.createOrThrow("Ada");

UserId.is(result); // type guard

const unknownValue: unknown = 20;
const maybe = UserId.createWithUnknown(unknownValue);

if (E.isRight(maybe)) {
	// maybe: E.Right<"createNewType", UserId>
}

const strictValue = UserId.createWithUnknownOrThrow(unknownValue);

const constraint = UserId.getConstraint("positive");
constraint.createOrThrow(1);

const largeValue = UserId.createWithLarge(24);
// E.Left<"createNewTypeError", C.NewTypeError<"user-id">> | E.Right<"createNewType", UserId>

const strictLargeValue = UserId.createWithLargeOrThrow(24);
