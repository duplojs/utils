export declare function chunk<const GenericElement extends unknown>(size: number): (input: Iterable<GenericElement>) => Generator<GenericElement[], unknown, unknown>;
export declare function chunk<const GenericElement extends unknown>(input: Iterable<GenericElement>, size: number): Generator<GenericElement[], unknown, unknown>;
