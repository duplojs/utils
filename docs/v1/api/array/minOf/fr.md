---
outline: [2, 3]
prev:
  text: "sum"
  link: "/v1/api/array/sum/fr"
next:
  text: "maxOf"
  link: "/v1/api/array/maxOf/fr"
---

# minOf

La fonction **`minOf()`** retourne la plus petite valeur numérique d'un tableau sans le modifier. Elle accepte aussi bien des tableaux classiques que des tuples immutables.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/minOf/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`maxOf`](/v1/api/array/maxOf/fr) - Retourne la valeur maximale d'un tableau
- [`reduce`](/v1/api/array/reduce/fr) - Permet d'écrire des agrégations personnalisées

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
