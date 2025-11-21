---
outline: [2, 3]
prev:
  text: "sortNumber"
  link: "/v1/api/array/sortNumber/fr"
next:
  text: "reduce"
  link: "/v1/api/array/reduce/fr"
---

# sortString

La méthode **`sortString()`** trie un tableau de chaînes selon l'ordre souhaité (`"asc"` ou `"dsc"`) et laisse le tableau d'origine intact.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/sortString/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
type Sort = "asc" | "dsc";

function sortString<GenericArray extends readonly string[]>(
	array: GenericArray,
	sort: Sort
): string[]
```

### Signature currifiée

```typescript
type Sort = "asc" | "dsc";

function sortString<GenericArray extends readonly string[]>(
	sort: Sort
): (array: GenericArray) => string[]
```

## Paramètres

- `array` : Le tableau de chaînes à trier.
- `sort` : L'ordre (`"asc"` ou `"dsc"`).

## Valeur de retour

Un nouveau tableau contenant les mêmes chaînes réordonnées selon le mode choisi.

## Voir aussi

- [`sort`](/v1/api/array/sort/fr) - Trie avec une comparaison personnalisée
- [`sortNumber`](/v1/api/array/sortNumber/fr) - Trie des nombres avec le même indicateur `sort`

## Sources

- [MDN Web Docs - Array.prototype.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
