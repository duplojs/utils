---
outline: [2, 3]
prev:
  text: "pop"
  link: "/v1/api/array/pop/fr"
next:
  text: "shift"
  link: "/v1/api/array/shift/fr"
---

# unshift

La fonction **`unshift()`** ajoute un ou plusieurs éléments au début du tableau et retourne une copie enrichie.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/unshift/examples/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntaxe

### Signature classique

```typescript
function unshift<GenericElement>(
	array: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[]
```

### Signature currifiée

```typescript
function unshift<GenericElement>(
	element: NoInfer<GenericElement>
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `element`, `...elements` : Valeurs insérées au début (dans l'ordre fourni).

## Valeur de retour

Un nouveau tableau dont le préfixe correspond aux valeurs ajoutées, suivi de l'ancien contenu.

## Voir aussi

- [`shift`](/v1/api/array/shift/fr) - Supprime le premier élément
- [`push`](/v1/api/array/push/fr) - Ajoute en fin de tableau

## Sources

- [MDN Web Docs - Array.prototype.unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
