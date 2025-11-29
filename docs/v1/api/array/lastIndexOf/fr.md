---
outline: [2, 3]
prev:
  text: "indexOf"
  link: "/v1/api/array/indexOf/fr"
next:
  text: "find"
  link: "/v1/api/array/find/fr"
---

# lastIndexOf

La méthode **`lastIndexOf()`** retourne l'index de la dernière occurrence d'un élément dans un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/lastIndexOf/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function lastIndexOf<GenericElement extends unknown>(
	array: readonly GenericElement[], 
	element: GenericElement, 
	fromIndex?: number
): number | undefined
```

### Signature currifiée

```typescript
function lastIndexOf<GenericElement extends unknown>(
	element: GenericElement
): (array: readonly GenericElement[]) => number | undefined
```

## Paramètres

- `array` : Le tableau dans lequel rechercher.
- `element` : L'élément à rechercher.
- `fromIndex` : L'index de départ pour la recherche en sens inverse (optionnel).

## Valeur de retour

L'index de la dernière occurrence de l'élément, ou `undefined` si l'élément n'est pas trouvé.

## Voir aussi

- [`indexOf`](/v1/api/array/indexOf/fr) - Retourne l'index de la première occurrence
- [`findLastIndex`](/v1/api/array/findLastIndex/fr) - Trouve le dernier index avec une condition

## Sources

- [MDN Web Docs - Array.lastIndexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
