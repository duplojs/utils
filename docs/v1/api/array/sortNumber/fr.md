---
outline: [2, 3]
prev:
  text: "sort"
  link: "/v1/api/array/sort/fr"
next:
  text: "sortString"
  link: "/v1/api/array/sortString/fr"
---

# sortNumber

La méthode **`sortNumber()`** trie un tableau de nombres en ordre croissant (`"asc"`) ou décroissant (`"dsc"`) sans modifier l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/sortNumber/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
type Sort = "asc" | "dsc";

function sortNumber<GenericArray extends readonly number[]>(
	array: GenericArray,
	sort: Sort
): number[]
```

### Signature currifiée

```typescript
type Sort = "asc" | "dsc";

function sortNumber<GenericArray extends readonly number[]>(
	sort: Sort
): (array: GenericArray) => number[]
```

## Paramètres

- `array` : Le tableau de nombres à trier.
- `sort` : L'ordre désiré (`"asc"` pour croissant, `"dsc"` pour décroissant).

## Valeur de retour

Un nouveau tableau contenant les valeurs numériques triées selon l'ordre indiqué.

## Voir aussi

- [`sort`](/v1/api/array/sort/fr) - Trie avec une fonction de comparaison personnalisée
- [`sortString`](/v1/api/array/sortString/fr) - Trie des chaînes avec le même indicateur `sort`

## Sources

- [MDN Web Docs - Array.prototype.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
