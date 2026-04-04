---
outline: [2, 3]
description: "La fonction createQueue() crée une file FIFO qui limite le nombre de tâches exécutées en parallèle et expose leurs résultats via des promesses."
prev:
  text: "promiseObject"
  link: "/fr/v1/api/common/promiseObject"
next:
  text: "asyncRetry"
  link: "/fr/v1/api/common/asyncRetry"
---

# queue

La fonction **`createQueue()`** crée une file FIFO qui limite le nombre de tâches exécutées en parallèle et expose leurs résultats via des promesses.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/queue/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
interface Queue {
	add<GenericOutput extends unknown>(
		theFunction: () => GenericOutput
	): Promise<
		| Awaited<GenericOutput>
		| DEither.Left<"execution-error", unknown>
	>;
	addExternal(): Promise<() => void>;
}

interface CreateQueueParams {
	concurrency?: number;
}

function createQueue(
	params?: CreateQueueParams
): Queue;
```

## Paramètres

- `params.concurrency` : Nombre maximal de tâches exécutées en parallèle. Les valeurs inférieures à `1` retombent sur `1`.

## Valeur de retour

Un objet `Queue` avec :
- `add` : ajoute une tâche à la file et retourne une promesse résolue avec son résultat ou un `DEither.left("execution-error", error)` si l'exécution échoue.
- `addExternal` : réserve un slot d'exécution et retourne une fonction `release` à appeler pour libérer ce slot plus tard.

## Voir aussi

- [`externalPromise`](/fr/v1/api/common/externalPromise) - Crée une promesse contrôlable depuis l'extérieur
- [`callThen`](/fr/v1/api/common/callThen) - Uniformise le traitement sync/async d'une valeur
- [`asyncRetry`](/fr/v1/api/common/asyncRetry) - Relance une opération asynchrone selon une stratégie de retry
