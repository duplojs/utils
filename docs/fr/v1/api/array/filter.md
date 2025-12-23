---
outline: [2, 3]
prev:
  text: "map"
  link: "/fr/v1/api/array/map"
next:
  text: "select"
  link: "/fr/v1/api/array/select"
---

# filter

La méthode **`filter()`** sélectionne les éléments d'un tableau qui satisfont un prédicat et retourne un nouveau tableau. Elle peut aussi servir de type guard pour affiner le typage des éléments conservés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/filter/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
  :foldLines="[2,34]"
/>

## Syntaxe

### Signature classique

```typescript
// Type Guard
function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput,
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => element is GenericOutput
): GenericOutput[]

// Boolean
function filter<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => boolean
): GenericInput[number][]
```

### Signature currifiée

```typescript
// Type Guard
function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => element is GenericOutput
): (input: GenericInput) => GenericOutput[]

// Boolean
function filter<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number],
	params: ArrayFilterParams<GenericInput>
) => boolean
): (array: GenericInput) => GenericInput[number][]
```

### Paramètres auxiliaires

```typescript
interface ArrayFilterParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Paramètres

- `input` : Le tableau à filtrer.
- `predicate` : Fonction appliquée à chaque élément. Elle décide si l'élément est conservé et peut agir comme type guard.
- `params.index` : Position de l'élément courant dans le tableau d'origine.
- `params.self` : Le tableau complet (utile pour comparer ou inspecter un voisin pendant le filtrage).

## Valeur de retour

Un nouveau tableau contenant uniquement les éléments pour lesquels le prédicat retourne `true`. L'ordre est préservé et le tableau initial reste inchangé.

## Voir aussi

- [`map`](/fr/v1/api/array/map) - Transforme chaque élément
- [`every`](/fr/v1/api/array/every) - Vérifie si tous les éléments satisfont une condition

## Sources

- [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
