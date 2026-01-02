import { A } from "@scripts";

A.length([1, 2, 3]); // 3

A.length(<const>["alpha", "beta"]); // 2

A.length([]); // 0
