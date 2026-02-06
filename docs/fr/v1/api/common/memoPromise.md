---
outline: [2, 3]
description: "La fonction memoPromise() évalue paresseusement une fonction qui retourne une valeur ou une promesse, puis mémorise le résultat résolu."
prev:
  text: "memo"
  link: "/fr/v1/api/common/memo"
next:
  text: "stringToMillisecond"
  link: "/fr/v1/api/common/stringToMillisecond"
---

# memoPromise

La fonction **`memoPromise()`** évalue paresseusement une fonction qui retourne une valeur ou une promesse, puis mémorise le résultat résolu.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/memoPromise/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
interface MemoizedPromise<
	GenericValue extends unknown
> {
	readonly value: MaybePromise<GenericValue>;
}

function memoPromise<
	GenericOutput extends unknown
>(
	theFunction: () => MaybePromise<GenericOutput>
): MemoizedPromise<GenericOutput>;
```

## Paramètres

- `theFunction` : Fonction évaluée une seule fois au premier accès, retournant une valeur ou une promesse.

## Valeur de retour

Un objet `MemoizedPromise` avec un getter `value` paresseux. Le premier accès renvoie une promesse ; une fois résolue, la propriété contient la valeur résolue.

## Voir aussi

- [`memo`](/fr/v1/api/common/memo) - Mémoïsation paresseuse synchrone
- [`externalPromise`](/fr/v1/api/common/externalPromise) - Promesse contrôlable
- [`promiseObject`](/fr/v1/api/common/promiseObject) - Résout des objets de promesses
