import { DObject } from "@duplojs/utils";

type User = { profile: { role: "admin" } } | { profile: { role: "user" } };
const input: User = { profile: { role: "admin" } };
const result = DObject.deepDiscriminate(input, "profile.role", "admin");
// result: true
