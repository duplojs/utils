import { callThen } from "./callThen";
import { createExternalPromise } from "./externalPromise";
import { createKind, type RemoveKind, type Kind } from "./kind";
import { type MaybePromise } from "./types";
import * as DEither from "@scripts/either";

export const queueKind = createKind("queue");

export interface Queue extends Kind<typeof queueKind.definition> {
	add<
		GenericOutput extends unknown,
	>(
		theFunction: () => GenericOutput
	): Promise<
		| Awaited<GenericOutput>
		| DEither.Left<"execution-error", unknown>
	>;

	addExternal(): Promise<
		() => void
	>;
}

interface QueueElement {
	theFunction(): MaybePromise<unknown>;
	next: QueueElement;
	previous: QueueElement;
}

export interface CreateQueueParams {
	concurrency?: number;
}

export function createQueue(params?: CreateQueueParams): Queue {
	const concurrency = params?.concurrency === undefined || params.concurrency < 1
		? 1
		: params.concurrency;
	let quantityRunning = 0;
	let firstElement: QueueElement | undefined = undefined;

	function add(
		theFunction: () => unknown,
	) {
		const externalPromise = createExternalPromise();
		const preparedFunction = () => {
			quantityRunning++;

			if (firstElement?.theFunction === preparedFunction) {
				if (firstElement === firstElement.next) {
					firstElement = undefined;
				} else {
					const newFirst = firstElement.next;
					const last = firstElement.previous;
					newFirst.previous = last;
					last.next = newFirst;

					firstElement = newFirst;
				}
			}

			let result: unknown = undefined;
			try {
				const MaybePromise = theFunction();

				result = MaybePromise instanceof Promise
					? MaybePromise.catch(
						(error) => DEither.left("execution-error", error),
					)
					: MaybePromise;
			} catch (error) {
				result = DEither.left("execution-error", error);
			}

			callThen(
				result,
				(output) => {
					externalPromise.resolve(output);
					quantityRunning--;
					firstElement?.theFunction();
				},
			);
		};

		if (quantityRunning < concurrency) {
			void preparedFunction();
		} else if (firstElement === undefined) {
			firstElement = {
				theFunction: preparedFunction,
				next: undefined as any,
				previous: undefined as any,
			};
			firstElement.next = firstElement;
			firstElement.previous = firstElement;
		} else {
			const oldLast = firstElement.previous;
			const newLastElement = {
				theFunction: preparedFunction,
				next: firstElement,
				previous: firstElement.previous,
			};

			oldLast.next = newLastElement;
			firstElement.previous = newLastElement;
		}

		return externalPromise.promise;
	}

	function addExternal() {
		const externalPromiseToStart = createExternalPromise<() => void>();
		const externalPromiseToFinish = createExternalPromise<never>();

		void add(
			() => {
				externalPromiseToStart.resolve(
					externalPromiseToFinish.resolve as never,
				);

				return externalPromiseToFinish.promise;
			},
		);

		return externalPromiseToStart.promise;
	}

	return queueKind.setTo(
		{
			add,
			addExternal,
		} satisfies Record<keyof RemoveKind<Queue>, unknown>,
	) as never;
}
