import { C, type E, type ExpectType } from "@duplojs/utils";

const emailFromDatabase: string = "math@duplojs.dev";

const emailResult = C.Email.createWithLarge(emailFromDatabase);

type CheckEmailResult = ExpectType<
	typeof emailResult,
	| E.Left<"createConstrainedTypeError", C.ConstraintError<"email">>
	| E.Right<"createConstrainedType", C.ConstrainedType<"email", `${string}@${string}.${string}`>>,
	"strict"
>;

const ContactEmail = C.createConstraintsSet(
	C.String,
	[
		C.Email,
		C.StringMin(5),
	],
);

const contactEmail = ContactEmail.createWithLargeOrThrow(emailFromDatabase);

type CheckContactEmail = ExpectType<
	typeof contactEmail,
	& C.Primitive<`${string}@${string}.${string}`>
	& C.GetConstraints<typeof ContactEmail>,
	"strict"
>;
