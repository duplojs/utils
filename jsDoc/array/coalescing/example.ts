import { A } from "@scripts";

A.coalescing(1); // [1]

A.coalescing(["alpha", "beta"]); // ["alpha", "beta"]

A.coalescing(null); // [null]
