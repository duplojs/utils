---
outline: [2, 3]
description: "La fonction concat() fusionne plusieurs tableaux en un nouveau tableau continu."
prev:
  text: "shift"
  link: "/fr/v1/api/array/shift"
next:
  text: "spliceDelete"
  link: "/fr/v1/api/array/spliceDelete"
---

# concat

La fonction **`concat()`** fusionne plusieurs tableaux en un nouveau tableau continu.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/concat/tryout.doc.ts"
  majorVersion="v1"
  height="290px"
/>

## Syntaxe

### Signature classique

```typescript
function concat<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	elements: readonly GenericElement[],
	...elementsRest: readonly GenericElement[][]
): GenericElement[]
```

### Signature currifiée

```typescript
function concat<
	GenericElement extends unknown
>(
	elements: readonly GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau de base.
- `elements`, `...elementsRest` : Tableaux supplémentaires à enchaîner.

## Valeur de retour

Un nouveau tableau contenant tous les éléments dans l'ordre où les tableaux ont été fournis.

## Voir aussi

- [`push`](/fr/v1/api/array/push) - Ajoute individuellement des valeurs
- [`spliceInsert`](/fr/v1/api/array/spliceInsert) - Insère à une position donnée

## Sources

- [MDN Web Docs - Array.prototype.concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
