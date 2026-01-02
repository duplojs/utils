import { A } from "@scripts";

A.first([1, 2, 3]); // 1

A.first(<const>["alpha", "beta"]); // predicate "alpha"

A.first([]); // undefined
