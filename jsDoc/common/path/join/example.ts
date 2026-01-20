import { Path } from "@scripts";

const simpleResult = Path.join("foo", "bar");
// simpleResult: "foo/bar"
const absoluteResult = Path.join("/foo/", "/bar");
// absoluteResult: "/foo/bar"
const normalizedResult = Path.join("", "foo", "bar/../baz");
// normalizedResult: "foo/baz"
