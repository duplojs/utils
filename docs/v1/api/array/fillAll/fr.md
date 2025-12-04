---
outline: [2, 3]
prev:
  text: "fill"
  link: "/v1/api/array/fill/fr"
next:
  text: "copyWithin"
  link: "/v1/api/array/copyWithin/fr"
---

# fillAll

La fonction **`fillAll()`** remplace tous les éléments d'un tableau par une valeur unique et renvoie le résultat sans altérer l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/fillAll/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function fillAll<GenericElement>(
	array: readonly GenericElement[],
	value: GenericElement
): GenericElement[]
```

### Signature currifiée

```typescript
function fillAll<GenericElement>(
	value: GenericElement
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `input` : Valeur qui sera copiée à chaque position.

## Valeur de retour

Un nouveau tableau où tous les éléments valent `input`.

## Voir aussi

- [`fill`](/v1/api/array/fill/fr) - Limite le remplissage à une section
- [`set`](/v1/api/array/set/fr) - Change un seul index spécifique

## Sources

- [MDN Web Docs - Array.prototype.fill()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
