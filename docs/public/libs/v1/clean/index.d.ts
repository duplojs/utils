/**
 * Clean Architecture building blocks for the domain layer: primitives, constraints, NewTypes, entities, flags, repositories, and use cases. The goal is explicit business types with runtime validation and predictable composition.
 * 
 * **How to import:**
 * - From the main entry (namespace style)
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { DClean, C } from "@duplojs/utils";
 * import * as DClean from "@duplojs/utils/clean";
 * import * as C from "@duplojs/utils/clean";
 * ```
 * 
 * What you will find in this namespace:
 * - primitives (`C.String`, `C.Number`, `C.Date`, `C.Time`)
 * - constraints (`C.Email`, `C.Int`, `C.Positive`, `C.Negative`)
 * - NewTypes and entities (`C.createNewType`, `C.createEntity`)
 * - flags, repositories, and use cases (`C.createFlag`, `C.createRepository`, `C.createUseCase`)
 * - primitive operators (`C.equal`, `C.add`, `C.length`, `C.dateGreaterThan`, `C.timeLessThan`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean
 * 
 * @namespace C
 * 
 */
export * from "./types";
export * from "./kind";
export * from "./newType";
export * from "./entity";
export * from "./constraint";
export * from "./primitive";
export * from "./repository";
export * from "./useCase";
export * from "./flag";
export * from "./unwrapEntity";
