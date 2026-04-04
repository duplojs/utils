import { type Kind } from "../../common";
export declare const queueKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/queue", unknown>>;
export interface QueueProperties {
    concurrency: number;
    injectResolver(resolver: () => void): void;
}
export interface Queue extends Kind<typeof queueKind.definition, QueueProperties> {
}
export declare function createQueue(properties: QueueProperties): Queue;
