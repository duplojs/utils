---
outline: [2, 3]
prev:
  text: "sleep"
  link: "/v1/api/common/sleep/fr"
next:
  text: "toJSON"
  link: "/v1/api/common/toJSON/fr"
---

# memo

La fonction **`memo()`** évalue une fonction une seule fois puis mémorise le résultat. Les appels suivants renvoient la même valeur sans recalcul.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/memo/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
interface Memoized<
	GenericValue extends unknown
> {
	readonly value: GenericValue;
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

Un objet `Memoized` avec la propriété `value` contenant le résultat unique.

## Voir aussi

- [`promiseObject`](/v1/api/common/promiseObject/fr) - Résolution d'objets asynchrones
- [`externalPromise`](/v1/api/common/externalPromise/fr) - Promesse contrôlable
