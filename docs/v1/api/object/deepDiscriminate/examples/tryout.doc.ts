import { type ExpectType, O } from "@duplojs/utils";

type User = { profile: { role: "admin" } } | { profile: { role: "user" } };
const input: User = { profile: { role: "admin" } };

if (O.deepDiscriminate(input, "profile.role", "admin")) {
	type check = ExpectType<
		typeof input,
		{
			profile: {
				role: "admin";
			};
		},
		"strict"
	>;
}
