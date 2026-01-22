import { Path } from "@duplojs/utils";

const fullName = Path.getBaseName("/foo/bar.txt");
// fullName: "bar.txt"
const withoutExtension = Path.getBaseName("/foo/bar.txt", { extension: ".txt" });
// withoutExtension: "bar"
const emptyResult = Path.getBaseName("..");
// emptyResult: null
