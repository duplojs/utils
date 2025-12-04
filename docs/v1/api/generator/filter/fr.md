---
outline: [2, 3]
prev:
  text: "asyncMap"
  link: "/v1/api/generator/asyncMap/fr"
next:
  text: "asyncFilter"
  link: "/v1/api/generator/asyncFilter/fr"
---

# filter

La fonction **`filter()`** filtre les éléments d'un générateur selon un prédicat. Retourne un nouveau générateur contenant uniquement les éléments qui satisfont la condition.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/filter/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique avec type guard

```typescript
function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput
): Generator<GenericOutput, unknown, unknown>
```

### Signature classique avec boolean

```typescript
function filter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean
): Generator<GenericElement, unknown, unknown>
```

### Signature currifiée

```typescript
function filter<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean
): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>
```

## Paramètres

- `iterator` : Le générateur à filtrer
- `predicate` : Fonction de filtrage qui reçoit :
  - `item` : L'élément courant
  - `params.index` : L'index de l'élément

## Valeur de retour

Un nouveau `Generator` contenant les éléments filtrés.

## Voir aussi

- [`asyncFilter`](/v1/api/generator/asyncFilter/fr) - Version asynchrone de filter
- [`map`](/v1/api/generator/map/fr) - Transforme les éléments d'un générateur
- [`reduce`](/v1/api/generator/reduce/fr) - Réduit un générateur à une valeur

## Sources

- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
