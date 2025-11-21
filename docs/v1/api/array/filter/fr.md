---
outline: [2, 3]
prev:
  text: "map"
  link: "/v1/api/array/map/fr"
next:
  text: "flat"
  link: "/v1/api/array/flat/fr"
---

# filter

La méthode **`filter()`** sélectionne les éléments d'un tableau qui satisfont un prédicat et retourne un nouveau tableau. Elle peut aussi servir de type guard pour affiner le typage des éléments conservés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/filter/examples/tryout.doc.ts"
  majorVersion="v1"
  height="700px"
/>

## Syntaxe

### Signature classique (type guard)

```typescript
function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement
>(
	array: readonly GenericElement[],
	predicate: (
		item: GenericElement,
		params: ArrayFilterParams
	) => item is GenericOutput
): GenericOutput[]
```

### Signature currifiée (type guard)

```typescript
function filter<
	GenericArray extends readonly unknown[],
	GenericOutput extends GenericArray[number]
>(
	predicate: (
		item: GenericArray[number],
		params: ArrayFilterParams
	) => item is GenericOutput
): (array: GenericArray) => GenericOutput[]
```

### Signature classique (prédicat booléen)

```typescript
function filter<GenericElement extends unknown>(
	array: readonly GenericElement[],
	predicate: (
		item: GenericElement,
		params: ArrayFilterParams
	) => boolean
): GenericElement[]
```

### Signature currifiée (prédicat booléen)

```typescript
function filter<GenericArray extends readonly unknown[]>(
	predicate: (
		item: GenericArray[number],
		params: ArrayFilterParams
	) => boolean
): (array: GenericArray) => GenericArray[number][]
```

### Paramètres auxiliaires

```typescript
interface ArrayFilterParams {
	index: number;
}
```

## Paramètres

- `array` : Le tableau à filtrer.
- `predicate` : Fonction appliquée à chaque élément. Elle décide si l'élément est conservé et peut agir comme type guard.
- `params.index` : Position de l'élément courant dans le tableau d'origine.

## Valeur de retour

Un nouveau tableau contenant uniquement les éléments pour lesquels le prédicat retourne `true`. L'ordre est préservé et le tableau initial reste inchangé.

## Voir aussi

- [`map`](/v1/api/array/map/fr) - Transforme chaque élément
- [`every`](/v1/api/array/every/fr) - Vérifie si tous les éléments satisfont une condition

## Sources

- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
