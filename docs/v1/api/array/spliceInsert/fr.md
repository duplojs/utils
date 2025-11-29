---
outline: [2, 3]
prev:
  text: "spliceDelete"
  link: "/v1/api/array/spliceDelete/fr"
next:
  text: "spliceReplace"
  link: "/v1/api/array/spliceReplace/fr"
---

# spliceInsert

La fonction **`spliceInsert()`** insère un tableau d'éléments à un index précis sans supprimer les valeurs existantes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/spliceInsert/examples/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntaxe

### Signature classique

```typescript
function spliceInsert<GenericElement>(
	array: readonly GenericElement[],
	indexFrom: number,
	elements: GenericElement[]
): GenericElement[]
```

### Signature currifiée

```typescript
function spliceInsert<GenericElement>(
	indexFrom: number,
	elements: GenericElement[]
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `indexFrom` : Position à laquelle insérer les nouvelles valeurs.
- `elements` : Tableau des valeurs à insérer.

## Valeur de retour

Un nouveau tableau contenant les éléments ajoutés à l'index demandé, les éléments existants étant décalés.

## Voir aussi

- [`spliceDelete`](/v1/api/array/spliceDelete/fr) - Supprime un segment
- [`spliceReplace`](/v1/api/array/spliceReplace/fr) - Remplace un segment par un autre

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
