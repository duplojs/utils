---
outline: [2, 3]
description: "Réserve un slot de queue pour sérialiser ou limiter les exécutions concurrentes d'un même flow."
prev:
  text: "calledByNext"
  link: "/fr/v1/api/flow/calledByNext"
next:
  text: "throttling"
  link: "/fr/v1/api/flow/throttling"
---

# queue

La fonction **`queue()`** réserve un slot pour l'exécution courante afin de sérialiser ou limiter les exécutions concurrentes d'un même flow.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/queue/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

```typescript
function queue<
	GenericConcurrency extends number
>(
	params?: {
		concurrency?: GenericConcurrency;
	}
): AsyncGenerator
```

## Paramètres

- `params.concurrency` : Nombre maximum d'exécutions simultanées autorisées pour la même référence de flow. La valeur par défaut est `1`.

## Valeur de retour

Un générateur asynchrone qui émet un effet de queue et retourne une fonction `release` à appeler quand l'exécution peut libérer son slot, généralement dans un bloc `finally`.

## Remarques

- L'état interne est stocké dans une `WeakMap` dont la clé est la référence du flow exécuté.
- Pour partager la même file d'attente entre plusieurs appels, réutilisez le même flow créé avec `F.create(...)` ou la même fonction obtenue avec `F.toFunction(...)`.
- Si `release()` n'est pas appelé, les exécutions suivantes restent bloquées dans la queue.

## Voir aussi

- [`calledByNext`](/fr/v1/api/flow/calledByNext) - Appelle un callback quand une exécution suivante remplace l'actuelle
- [`throttling`](/fr/v1/api/flow/throttling) - Ignore ou reporte les appels trop rapprochés
- [`exec`](/fr/v1/api/flow/exec) - Exécute un flow imbriqué dans le flow courant
