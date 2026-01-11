/**
 * Generator utilities for iterable and async iterable processing. Functions preserve
 * inputs and return new values or iterables.
 * 
 * **How to import:**
 * - From the main entry (namespace style)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { DGenerator, G } from "@duplojs/utils";
 * import * as DGenerator from "@duplojs/utils/generator";
 * import * as G from "@duplojs/utils/generator";
 * ```
 * 
 * What you will find in this namespace:
 * - iteration and transforms (`G.map`, `G.filter`, `G.reduce`)
 * - reduce helpers (`G.reduceFrom`)
 * - control and execution (`G.loop`, `G.execute`)
 * - batching (`G.chunk`)
 * - async variants (`G.asyncMap`, `G.asyncFilter`, `G.asyncReduce`, `G.asyncLoop`, `G.asyncChunk`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/generator
 * 
 * @namespace G
 * 
 */
export * from "./map";
export * from "./execute";
export * from "./asyncMap";
export * from "./filter";
export * from "./asyncFilter";
export * from "./reduce";
export * from "./asyncReduce";
export * from "./loop";
export * from "./asyncLoop";
export * from "./chunk";
export * from "./asyncChunk";
