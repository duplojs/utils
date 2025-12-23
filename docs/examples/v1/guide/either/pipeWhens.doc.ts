import { E, pipe, type ExpectType } from "@duplojs/utils";

function getCreateUserResult() {
	return Math.random() > 0.5
		? E.right(
			"user.created",
			{
				userId: "usr_1",
			},
		)
		: E.left(
			"emailAlreadyExists",
			{
				email: "taken@example.com",
			},
		);
}

const result = getCreateUserResult();

const userIdOrError = pipe(
	result,
	E.whenIsRight((value) => value.userId),
);

type CheckUserIdOrError = ExpectType<
	typeof userIdOrError,
	"usr_1" | E.EitherLeft<"emailAlreadyExists", { readonly email: "taken@example.com" }>,
	"strict"
>;

const errorEmailOrOriginal = pipe(
	result,
	E.whenHasInformation(
		"emailAlreadyExists",
		(error) => error.email,
	),
);

type CheckErrorEmailOrOriginal = ExpectType<
	typeof errorEmailOrOriginal,
	"taken@example.com" | E.EitherRight<"user.created", { readonly userId: "usr_1" }>,
	"strict"
>;

const message = pipe(
	result,
	E.whenHasInformation(
		"user.created",
		(payload) => `created:${payload.userId}`,
	),
	E.whenHasInformation(
		"emailAlreadyExists",
		(payload) => `conflict:${payload.email}`,
	),
);

type CheckMessage = ExpectType<
	typeof message,
	"created:usr_1" | "conflict:taken@example.com",
	"strict"
>;
