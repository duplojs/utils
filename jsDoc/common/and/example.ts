import { and, DObject, pipe, when } from "@scripts";

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

const result = pipe(
	{
		type: "admin",
		status: "active",
		meta: {
			role: "super",
		},
	} as Admin | Viewer,
	when(
		and([
			DObject.discriminate("type", "admin"),
			DObject.discriminate("status", "active"),
		]),
		(value) => {
			// type: Admin
		},
	),
);
