import { O, pipe } from "@scripts";

O.getDeepProperty(
	{
		user: {
			name: "Ada",
		},
	},
	"user.name",
); // "Ada"

pipe(
	{
		meta: {
			count: 2,
		},
	},
	O.getDeepProperty("meta.count"),
); // 2

O.getDeepProperty(
	{
		settings: {
			theme: "light",
		},
	},
	"settings.theme",
); // "light"
