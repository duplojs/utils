import { A, type ExpectType } from "@duplojs/utils";

const users = [
	{
		id: 1,
		role: "user",
	},
	{
		id: 2,
		role: "admin",
	},
] as const;

const updated = A.findAndReplace(
	users,
	({ id }) => id === 1,
	{
		id: 1 as const,
		role: "manager" as const,
	},
);

type check = ExpectType<
	typeof updated,
	(
		| {
			readonly id: 1;
			readonly role: "user";
		}
		| {
			readonly id: 2;
			readonly role: "admin";
		}
		| {
			id: 1;
			role: "manager";
		}
	)[] | undefined,
	"strict"
>;
