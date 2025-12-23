---
outline: [2, 3]
prev:
  text: "notIncludes"
  link: "/fr/v1/api/array/notIncludes"
next:
  text: "lastIndexOf"
  link: "/fr/v1/api/array/lastIndexOf"
---

# indexOf

La méthode **`indexOf()`** retourne l'index de la première occurrence d'un élément dans un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/indexOf/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function indexOf<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	element: GenericElement, 
	fromIndex?: number
): number | undefined
```

### Signature currifiée

```typescript
function indexOf<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly GenericElement[]) => number | undefined
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `element` : L'élément à rechercher.
- `fromIndex` : L'index de départ pour la recherche (optionnel).

## Valeur de retour

L'index de la première occurrence de l'élément, ou `undefined` si l'élément n'est pas trouvé.

## Voir aussi

- [`lastIndexOf`](/fr/v1/api/array/lastIndexOf) - Retourne l'index de la dernière occurrence
- [`findIndex`](/fr/v1/api/array/findIndex) - Trouve l'index avec une condition

## Sources

- [MDN Web Docs - Array.indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
