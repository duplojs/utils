import { Path } from "@scripts";

const result = Path.getParentFolderPath("/foo/bar/baz");
// result: "/foo/bar"
const trailingResult = Path.getParentFolderPath("/foo/bar/");
// trailingResult: "/foo"
const relativeResult = Path.getParentFolderPath("foo");
// relativeResult: "."
const absoluteResult = Path.getParentFolderPath("/foo");
// absoluteResult: "/"
