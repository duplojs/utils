---
outline: [2, 3]
description: "La méthode at() retourne l'élément à un index donné (supporte les index négatifs)."
prev:
  text: "toTuple"
  link: "/fr/v1/api/array/toTuple"
next:
  text: "first"
  link: "/fr/v1/api/array/first"
---

# at

La méthode **`at()`** retourne l'élément à un index donné (supporte les index négatifs).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/at/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

### Signature classique

```typescript
export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	array: GenericArray,
	index: GenericIndex,
): AtArray<GenericArray, GenericIndex>
```

### Signature currifiée

```typescript
export function at<
	GenericArray extends readonly unknown[],
	GenericIndex extends number,
>(
	index: GenericIndex,
): (array: GenericArray) => AtArray<GenericArray, GenericIndex>
```

## Paramètres

- `input` : Le tableau dont on veut récupérer un élément.
- `index` : L'index de l'élément à récupérer (peut être négatif pour compter depuis la fin).

## Valeur de retour

L'élément à l'index donné, ou `undefined` si l'index est hors limites.

## Voir aussi

- [`first`](/fr/v1/api/array/first) - Retourne le premier élément du tableau
- [`last`](/fr/v1/api/array/last) - Retourne le dernier élément du tableau

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
