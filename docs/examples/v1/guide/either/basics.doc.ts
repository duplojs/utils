import { E, pipe, unwrap, type ExpectType } from "@duplojs/utils";

function createUser(email: string) {
	if (email === "taken@example.com") {
		return E.left(
			"emailAlreadyExists",
			{
				email,
			},
		);
	}

	return E.right(
		"user.created",
		{
			userId: "usr_1",
			email,
		},
	);
}

const created = createUser("ada@example.com");

const createdUserId = E.hasInformation(created, "user.created")
	? unwrap(created).userId
	: null;

type CheckCreatedUserId = ExpectType<
	typeof createdUserId,
	"usr_1" | null,
	"strict"
>;

const computed = E.rightPipe(
	E.success(10),
	(value) => value + 2,
	(value) => (value > 11 ? E.left("tooBig", value) : value),
	(value) => value * 2,
);

type CheckComputed = ExpectType<
	typeof computed,
	E.Left<"tooBig", number> | E.Success<number>,
	"strict"
>;

function parseAge(rawValue: string) {
	const parsedAge = Number(rawValue);

	return Number.isNaN(parsedAge)
		? E.left(
			"invalidAge",
			{
				rawValue,
			},
		)
		: E.success(parsedAge);
}

const grouped = E.group({
	userId: E.right("user.id", "usr_1"),
	age: parseAge("36"),
});

const groupedValue = E.isRight(grouped)
	? unwrap(grouped)
	: null;

type CheckGroupedValue = ExpectType<
	typeof groupedValue,
	{
		userId: "usr_1";
		age: number;
	} | null,
	"strict"
>;

const extractedAge = pipe(
	grouped,
	E.whenIsRight((value) => value.age),
);

type CheckExtractedAge = ExpectType<
	typeof extractedAge,
	number | E.Left<"invalidAge", { readonly rawValue: string }>,
	"strict"
>;
