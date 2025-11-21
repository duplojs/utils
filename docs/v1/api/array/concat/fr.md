---
outline: [2, 3]
prev:
  text: "shift"
  link: "/v1/api/array/shift/fr"
next:
  text: "spliceDelete"
  link: "/v1/api/array/spliceDelete/fr"
---

# concat

La fonction **`concat()`** fusionne plusieurs tableaux en un nouveau tableau continu.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/concat/examples/tryout.doc.ts"
  majorVersion="v1"
  height="290px"
/>

## Syntaxe

### Signature classique

```typescript
function concat<GenericElement>(
	array: readonly GenericElement[],
	elements: readonly GenericElement[],
	...elementsRest: readonly GenericElement[][]
): GenericElement[]
```

### Signature currifiée

```typescript
function concat<GenericElement>(
	elements: readonly GenericElement[]
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau de base.
- `elements`, `...elementsRest` : Tableaux supplémentaires à enchaîner.

## Valeur de retour

Un nouveau tableau contenant tous les éléments dans l'ordre où les tableaux ont été fournis.

## Voir aussi

- [`push`](/v1/api/array/push/fr) - Ajoute individuellement des valeurs
- [`spliceInsert`](/v1/api/array/spliceInsert/fr) - Insère à une position donnée

## Sources

- [MDN Web Docs - Array.prototype.concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
