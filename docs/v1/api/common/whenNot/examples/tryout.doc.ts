import { whenNot } from "@duplojs/utils";

type User = { name: string; banned?: boolean };

const safeName = whenNot(
	{ name: "Mallory" } as User,
	user => Boolean(user.banned),
	user => `${user.name} (guest)`
);

// safeName: "Mallory (guest)"

const mapper = whenNot<User, string>(
	user => Boolean(user.banned),
	user => `${user.name} (guest)`
);

const result = mapper({ name: "Trent", banned: true });
// result: { name: "Trent", banned: true }
