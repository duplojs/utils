---
outline: [2, 3]
description: "La fonction push() ajoute un ou plusieurs éléments à la fin du tableau et renvoie une nouvelle instance, l'entrée restant intacte."
prev:
  text: "insert"
  link: "/fr/v1/api/array/insert"
next:
  text: "pop"
  link: "/fr/v1/api/array/pop"
---

# push

La fonction **`push()`** ajoute un ou plusieurs éléments à la fin du tableau et renvoie une nouvelle instance, l'entrée restant intacte.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/push/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function push<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	element: NoInfer<GenericElement>,
	...elements: NoInfer<GenericElement>[]
): GenericElement[]
```

### Signature currifiée

```typescript
function push<
	GenericElement extends unknown
>(
	element: NoInfer<GenericElement>
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `element`, `...elements` : Valeurs à ajouter à la fin.

## Valeur de retour

Un nouveau tableau contenant tous les éléments originaux suivis des éléments ajoutés.

## Voir aussi

- [`unshift`](/fr/v1/api/array/unshift) - Ajoute au début du tableau
- [`concat`](/fr/v1/api/array/concat) - Fusionne plusieurs tableaux

## Sources

- [MDN Web Docs - Array.prototype.push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
