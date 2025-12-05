---
outline: [2, 3]
prev:
  text: "findAndSpliceInsert"
  link: "/v1/api/array/findAndSpliceInsert/fr"
next:
  text: "coalescing"
  link: "/v1/api/array/coalescing/fr"
---

# findAndSpliceReplace

La fonction **`findAndSpliceReplace()`** cherche un élément avec un prédicat et le remplace, ainsi que les éléments suivants, par un tableau de nouvelles valeurs.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findAndSpliceReplace/examples/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntaxe

### Signature classique

```typescript
function findAndSpliceReplace<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): GenericElement[] | undefined
```

### Signature currifiée

```typescript
function findAndSpliceReplace<
	GenericElement extends unknown
>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[] | undefined
```

## Paramètres

- `input` : Tableau à modifier.
- `predicate` : Condition pour trouver la position à remplacer.
- `elements` : Valeurs qui remplaceront celles présentes à partir de l'index trouvé. Leur nombre détermine combien d'éléments sont écrasés.

## Valeur de retour

Un nouveau tableau avec les remplacements, ou `undefined` si aucun élément n'est trouvé.

## Voir aussi

- [`findAndSpliceDelete`](/v1/api/array/findAndSpliceDelete/fr)
- [`findAndSpliceInsert`](/v1/api/array/findAndSpliceInsert/fr)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
