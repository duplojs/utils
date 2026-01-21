import { Path } from "@duplojs/utils";

const simplePath = Path.join("foo", "bar");
// simplePath: "foo/bar"
const absolutePath = Path.join("/foo/", "/bar");
// absolutePath: "/foo/bar"
const normalizedPath = Path.join("", "foo", "bar/../baz");
// normalizedPath: "foo/baz"
