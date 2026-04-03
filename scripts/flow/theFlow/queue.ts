import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const queueKind = createFlowKind<
	"queue",
	unknown
>("queue");

export interface QueueProperties {
	concurrency: number;
	injectResolver(resolver: () => void): void;
}

export interface Queue extends Kind<
	typeof queueKind.definition,
	QueueProperties
> {

}

export function createQueue(
	properties: QueueProperties,
): Queue {
	return queueKind.setTo({}, properties);
}
