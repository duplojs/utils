---
outline: [2, 3]
prev:
  text: "spliceDelete"
  link: "/fr/v1/api/array/spliceDelete"
next:
  text: "spliceReplace"
  link: "/fr/v1/api/array/spliceReplace"
---

# spliceInsert

La fonction **`spliceInsert()`** insère un tableau d'éléments à un index précis sans supprimer les valeurs existantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/spliceInsert/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntaxe

### Signature classique

```typescript
function spliceInsert<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	indexFrom: number,
	elements: GenericElement[]
): GenericElement[]
```

### Signature currifiée

```typescript
function spliceInsert<
	GenericElement extends unknown
>(
	indexFrom: number,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `indexFrom` : Position à laquelle insérer les nouvelles valeurs.
- `elements` : Tableau des valeurs à insérer.

## Valeur de retour

Un nouveau tableau contenant les éléments ajoutés à l'index demandé, les éléments existants étant décalés.

## Voir aussi

- [`spliceDelete`](/fr/v1/api/array/spliceDelete) - Supprime un segment
- [`spliceReplace`](/fr/v1/api/array/spliceReplace) - Remplace un segment par un autre

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
