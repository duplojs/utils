import { Path } from "@scripts";

const defaultResult = Path.getBaseName("/foo/bar.txt");
// defaultResult: "bar.txt"
const withoutExtResult = Path.getBaseName("/foo/bar.txt", { removeExtension: true });
// withoutExtResult: "bar"
const nullResult = Path.getBaseName("bar.txt");
// nullResult: null
