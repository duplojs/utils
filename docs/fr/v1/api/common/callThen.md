---
outline: [2, 3]
description: "La fonction callThen() applique un callback directement sur une valeur, ou attend une Promise avant d'exécuter ce même callback."
prev:
  text: "externalPromise"
  link: "/fr/v1/api/common/externalPromise"
next:
  text: "promiseAll"
  link: "/fr/v1/api/common/promiseAll"
---

# callThen

La fonction **`callThen()`** applique un callback directement sur une valeur, ou attend une `Promise` avant d'exécuter ce même callback.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/callThen/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

```typescript
function callThen<
	GenericInput extends unknown,
	GenericOutput extends unknown,
>(
	input: GenericInput,
	TheFunction: (
		input: Awaited<GenericInput>
	) => GenericOutput,
): GenericInput extends Promise<unknown>
	? Promise<Awaited<GenericOutput>>
	: GenericOutput;
```

## Paramètres

- `input` : Valeur directe ou `Promise` à transformer.
- `TheFunction` : Callback exécuté avec la valeur résolue de `input`.

## Valeur de retour

- Si `input` est une valeur directe, retourne la sortie du callback.
- Si `input` est une `Promise`, retourne une `Promise` résolue avec la sortie du callback.

## Voir aussi

- [`externalPromise`](/fr/v1/api/common/externalPromise) - Crée une promesse contrôlable depuis l'extérieur
- [`promiseAll`](/fr/v1/api/common/promiseAll) - Résout un tuple ou un iterable de promesses/valeurs
- [`promiseObject`](/fr/v1/api/common/promiseObject) - Résout un objet de promesses
- [`asyncPipe`](/fr/v1/api/common/asyncPipe) - Chaîne des transformations asynchrones
