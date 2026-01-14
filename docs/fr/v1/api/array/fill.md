---
outline: [2, 3]
description: "La fonction fill() remplit une portion d'un tableau avec une valeur donnée et retourne une copie modifiée."
prev:
  text: "set"
  link: "/fr/v1/api/array/set"
next:
  text: "fillAll"
  link: "/fr/v1/api/array/fillAll"
---

# fill

La fonction **`fill()`** remplit une portion d'un tableau avec une valeur donnée et retourne une copie modifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/fill/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

### Signature classique

```typescript
function fill<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: GenericElement, 
	start: number, 
	end: number
): GenericElement[];
```

### Signature currifiée

```typescript
function fill<
	GenericElement extends unknown
>(
	element: GenericElement, 
	start: number, 
	end: number
): (input: readonly GenericElement[]) => GenericElement[];
```

## Paramètres

- `input` : Tableau source.
- `element` : Valeur qui remplacera chaque élément de la section ciblée.
- `start` : Index de début (inclus).
- `end` : Index de fin (exclus).

## Valeur de retour

Un nouveau tableau dont la section `[start, end)` contient `element`. Le reste du tableau reste inchangé.

## Voir aussi

- [`fillAll`](/fr/v1/api/array/fillAll) - Remplit tout le tableau
- [`set`](/fr/v1/api/array/set) - Remplace un seul index

## Sources

- [MDN Web Docs - Array.prototype.fill()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
