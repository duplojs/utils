import { O, pipe, when } from "@scripts";

const userObj = {
	profile: {
		status: "active",
	},
};

if (O.deepDiscriminate(userObj, "profile.status", "active")) {
	// userObj is active
}

pipe(
	userObj,
	when(
		O.deepDiscriminate("profile.status", "disabled"),
		(value) => {
			// value is disabled
		},
	),
);

O.deepDiscriminate(
	{
		meta: {
			level: 2,
		},
	},
	"meta.level",
	[1, 2], // or
); // true
