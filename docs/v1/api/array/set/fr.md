---
outline: [2, 3]
prev:
  text: "maxElements"
  link: "/v1/api/array/maxElements/fr"
next:
  text: "fill"
  link: "/v1/api/array/fill/fr"
---

# set

La fonction **`set()`** remplace la valeur à un index donné et retourne un nouveau tableau, sans modifier l'original.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/set/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
function set<GenericValue>(
	array: readonly GenericValue[],
	index: number,
	value: GenericValue
): GenericValue[]
```

### Signature currifiée

```typescript
function set<GenericValue>(
	index: number,
	value: GenericValue
): (array: readonly GenericValue[]) => GenericValue[]
```

## Paramètres

- `array` : Le tableau source.
- `index` : L'index à remplacer (supporte les valeurs supérieures à la longueur, une nouvelle cellule est alors ajoutée).
- `value` : La nouvelle valeur.

## Valeur de retour

Un nouveau tableau dont l'élément à `index` correspond à `value`. Les autres éléments sont copiés tels quels.

## Voir aussi

- [`fill`](/v1/api/array/fill/fr) - Remplit une portion du tableau
- [`copyWithin`](/v1/api/array/copyWithin/fr) - Copie un segment à l'intérieur du même tableau

## Sources

- [MDN Web Docs - Array.prototype.with()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/with)
