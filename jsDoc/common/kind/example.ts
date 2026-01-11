import { createKind, type Kind } from "@scripts";

const userKind = createKind<"user", { id: string }>("user");

interface User extends Kind<typeof userKind.definition> {
	name: string;
}

const User = {
	new(params: {
		id: string;
		name: string;
	}): User {
		return userKind.addTo(
			{ name: params.name },
			{ id: params.id },
		);
	},
	is(input: unknown): input is User {
		return userKind.has(input);
	},
};

const user = User.new({
	id: "u_1",
	name: "Ada",
});

if (User.is(user)) {
	const userId = userKind.getValue(user).id;
}

const received: unknown = JSON.parse(JSON.stringify(user));
if (User.is(received)) {
	const userId = userKind.getValue(received).id;
}
