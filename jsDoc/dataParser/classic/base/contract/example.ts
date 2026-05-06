import { DP } from "@scripts";

interface User {
	id: number;
	name: string;
}

const userParser: DP.DataParser<User> = DP.object({
	id: DP.number(),
	name: DP.string(),
}).contract();

const statusParser: DP.DataParser<"draft" | "published">
	= DP.literal(["draft", "published"]).contract();
