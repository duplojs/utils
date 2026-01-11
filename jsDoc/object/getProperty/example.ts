import { O, pipe } from "@scripts";

O.getProperty(
	{
		name: "Ada",
	},
	"name",
); // "Ada"

pipe(
	{
		count: 2,
	},
	O.getProperty("count"),
); // 2

O.getProperty(
	{
		active: true,
	},
	"active",
); // true
