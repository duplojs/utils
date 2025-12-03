import { and, type ExpectType, O, pipe, when } from "@duplojs/utils";

interface Admin {
	type: "admin";
	status: "active";
	meta: {
		role: "super";
	};
}

interface Viewer {
	type: "viewer";
	status: "active";
	meta: {
		role: "reader";
	};
}

type User = Admin | Viewer;

const result = pipe(
	{
		type: "admin",
		status: "active",
		meta: {
			role: "super",
		},
	} as User,
	when(
		and([
			O.discriminate("type", "admin"),
			O.discriminate("status", "active"),
		]),
		(value) => {
			type check = ExpectType<
				typeof value,
				Admin,
				"strict"
			>;

			return "myValue";
		},
	),
);

type check = ExpectType<
	typeof result,
	string | Viewer,
	"strict"
>;
