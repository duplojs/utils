---
outline: [2, 3]
description: "La fonction unshift() ajoute un ou plusieurs éléments au début du tableau et retourne une copie enrichie."
prev:
  text: "pop"
  link: "/fr/v1/api/array/pop"
next:
  text: "shift"
  link: "/fr/v1/api/array/shift"
---

# unshift

La fonction **`unshift()`** ajoute un ou plusieurs éléments au début du tableau et retourne une copie enrichie.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/unshift/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function unshift<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[]
```

### Signature currifiée

```typescript
function unshift<
	GenericElement extends unknown
>(
	element: NoInfer<GenericElement>
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `element`, `...elements` : Valeurs insérées au début (dans l'ordre fourni).

## Valeur de retour

Un nouveau tableau dont le préfixe correspond aux valeurs ajoutées, suivi de l'ancien contenu.

## Voir aussi

- [`shift`](/fr/v1/api/array/shift) - Supprime le premier élément
- [`push`](/fr/v1/api/array/push) - Ajoute en fin de tableau

## Sources

- [MDN Web Docs - Array.prototype.unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
