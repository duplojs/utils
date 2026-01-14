---
outline: [2, 3]
description: "La fonction minOf() retourne la plus petite valeur numérique d'un tableau sans le modifier. Elle accepte aussi bien des tableaux classiques que des tuples immutables."
prev:
  text: "sum"
  link: "/fr/v1/api/array/sum"
next:
  text: "maxOf"
  link: "/fr/v1/api/array/maxOf"
---

# minOf

La fonction **`minOf()`** retourne la plus petite valeur numérique d'un tableau sans le modifier. Elle accepte aussi bien des tableaux classiques que des tuples immutables.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/minOf/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

```typescript
function minOf<
	GenericInput extends readonly number[]
>(
	input: GenericArray
): number | undefined
```

## Paramètres

- `input` : Tableau de nombres à analyser.

## Valeur de retour

Le plus petit nombre présent dans `input`, ou `undefined` si le tableau est vide.

## Voir aussi

- [`maxOf`](/fr/v1/api/array/maxOf) - Retourne la valeur maximale d'un tableau
- [`reduce`](/fr/v1/api/array/reduce) - Permet d'écrire des agrégations personnalisées

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
