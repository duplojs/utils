import { O } from "@duplojs/utils";

type User = { profile: { role: "admin" } } | { profile: { role: "user" } };
const input: User = { profile: { role: "admin" } };
const result = O.deepDiscriminate(input, "profile.role", "admin");
// result: true
