import { A } from "@scripts";

A.last([1, 2, 3]); // 3

A.last(<const>["alpha", "beta"]); // "beta"

A.last([]); // undefined
