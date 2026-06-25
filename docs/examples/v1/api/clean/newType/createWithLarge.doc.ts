import { C, type E, type ExpectType } from "@duplojs/utils";

const EmailAddress = C.createNewType(
	"emailAddress",
	C.String,
	C.Email,
);

type EmailAddress = C.GetNewType<typeof EmailAddress>;

const emailFromDatabase: string = "math@duplojs.dev";

const result = EmailAddress.createWithLarge(emailFromDatabase);

type CheckResult = ExpectType<
	typeof result,
	| E.Left<"createNewTypeError", C.NewTypeError<"emailAddress">>
	| E.Right<"createNewType", EmailAddress>,
	"strict"
>;

const emailAddress = EmailAddress.createWithLargeOrThrow(emailFromDatabase);

type CheckEmailAddress = ExpectType<
	typeof emailAddress,
	EmailAddress,
	"strict"
>;
