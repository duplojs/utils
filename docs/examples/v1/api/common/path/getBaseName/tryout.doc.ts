import { Path } from "@duplojs/utils";

const fullName = Path.getBaseName("/foo/bar.txt");
// fullName: "bar.txt"
const withoutExtension = Path.getBaseName("/foo/bar.txt", { removeExtension: true });
// withoutExtension: "bar"
const emptyResult = Path.getBaseName("bar.txt");
// emptyResult: null
