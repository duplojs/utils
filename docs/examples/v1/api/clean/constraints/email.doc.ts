import { type ExpectType, C, DP } from "@duplojs/utils";

const EmailAddress = C.createNewType("email", DP.string(), C.Email);

const email = EmailAddress.createOrThrow("alice@acme.com");

type check = ExpectType<
	typeof email,
	C.NewType<"email", "alice@acme.com", "email">,
	"strict"
>;
