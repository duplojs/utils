import { Path } from "@scripts";

const defaultResult = Path.getBaseName("/foo/bar.txt");
// defaultResult: "bar.txt"
const withoutExtResult = Path.getBaseName("/foo/bar.txt", { extension: ".txt" });
// withoutExtResult: "bar"
const windowsResult = Path.getBaseName("C:\\foo\\bar");
// windowsResult: "bar"
