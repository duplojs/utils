import { Path, type ExpectType } from "@duplojs/utils";

const input = Math.random() > 0.5 ? "/usr/bin" : "C:\\bin";

if (Path.isUnixPath(input)) {
	type check = ExpectType<
	typeof input,
		"/usr/bin",
		"strict"
	>;
}
