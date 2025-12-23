export declare function asyncChunk<const GenericElement extends unknown>(size: number): (input: AsyncIterable<GenericElement>) => AsyncGenerator<GenericElement[], unknown, unknown>;
export declare function asyncChunk<const GenericElement extends unknown>(input: AsyncIterable<GenericElement>, size: number): AsyncGenerator<GenericElement[], unknown, unknown>;
