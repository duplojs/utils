---
outline: [2, 3]
description: "La fonction memo() évalue une fonction une seule fois puis mémorise le résultat. Les appels suivants renvoient la même valeur sans recalcul."
prev:
  text: "sleep"
  link: "/fr/v1/api/common/sleep"
next:
  text: "toJSON"
  link: "/fr/v1/api/common/toJSON"
---

# memo

La fonction **`memo()`** évalue une fonction une seule fois puis mémorise le résultat. Les appels suivants renvoient la même valeur sans recalcul.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/memo/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
interface Memoized<
	GenericInput extends unknown
> {
	readonly input: GenericInput;
}

function memo<
	GenericOutput extends AnyValue
>(
	theFunction: () => GenericOutput
): Memoized<GenericOutput>;
```

## Paramètres

- `theFunction` : Fonction évaluée une seule fois pour produire la valeur mémorisée.

## Valeur de retour

Un objet `Memoized` avec la propriété `input` contenant le résultat unique.

## Voir aussi

- [`promiseObject`](/fr/v1/api/common/promiseObject) - Résolution d'objets asynchrones
- [`externalPromise`](/fr/v1/api/common/externalPromise) - Promesse contrôlable
