---
outline: [2, 3]
prev:
  text: "reverse"
  link: "/v1/api/array/reverse/fr"
next:
  text: "reduce"
  link: "/v1/api/array/reduce/fr"
---

# sort

La méthode **`sort()`** trie les éléments d'un tableau en utilisant une fonction de comparaison personnalisée et retourne un nouveau tableau trié.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/sort/examples/tryout.doc.ts"
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

- [`reverse`](/v1/api/array/reverse/fr) - Inverse l'ordre des éléments

## Sources

- [MDN Web Docs - Array.prototype.sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
