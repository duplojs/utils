---
outline: [2, 3]
description: "La méthode sort() trie les éléments d'un tableau en utilisant une fonction de comparaison personnalisée et retourne un nouveau tableau trié."
prev:
  text: "reverse"
  link: "/fr/v1/api/array/reverse"
next:
  text: "reduce"
  link: "/fr/v1/api/array/reduce"
---

# sort

La méthode **`sort()`** trie les éléments d'un tableau en utilisant une fonction de comparaison personnalisée et retourne un nouveau tableau trié.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/sort/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function sort<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	compareFn: (
		first: GenericElement, 
		second: GenericElement
	) => number
): GenericElement[]
```

### Signature currifiée

```typescript
function sort<
	GenericElement extends unknown
>(
	compareFn: (
		first: GenericElement, 
		second: GenericElement
	) => number
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Le tableau à trier.
- `compareFn` : Fonction qui compare deux éléments. Elle doit retourner un nombre négatif, nul ou positif pour définir l'ordre relatif.

## Valeur de retour

Un nouveau tableau contenant les mêmes éléments triés selon la fonction fournie. Le tableau initial n'est jamais modifié.

## Voir aussi

- [`reverse`](/fr/v1/api/array/reverse) - Inverse l'ordre des éléments

## Sources

- [MDN Web Docs - Array.prototype.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
