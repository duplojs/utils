import { Path, type ExpectType } from "@duplojs/utils";

const input = Math.random() > 0.5 ? "/var/log" : "var/log";

if (Path.isAbsolute(input)) {
	type check = ExpectType<
		typeof input,
		"/var/log",
		"strict"
	>;
}
