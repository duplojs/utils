---
outline: [2, 3]
description: La fonction chunk() découpe un itérable (générateur ou tableau) en blocs de taille fixe et renvoie un générateur de tableaux. Le dernier bloc peut être plus court si la taille ne divise pas exactement l'entrée.
prev:
  text: "filter"
  link: "/fr/v1/api/generator/filter"
next:
  text: "reduce"
  link: "/fr/v1/api/generator/reduce"
---

# chunk

La fonction **`chunk()`** découpe un itérable (générateur ou tableau) en blocs de taille fixe et renvoie un générateur de tableaux. Le dernier bloc peut être plus court si la taille ne divise pas exactement l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/chunk/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function chunk<
	const GenericElement extends unknown
>(
  input: Iterable<GenericElement>,
  size: number,
): Generator<GenericElement[], unknown, unknown>
```

### Signature currifiée

```typescript
function chunk<
	const GenericElement extends unknown
>(
  size: number,
): (input: Iterable<GenericElement>) => Generator<GenericElement[], unknown, unknown>
```

## Paramètres

- `input` : Itérable (générateur ou tableau) à découper.
- `size` : Taille de chaque bloc.

## Valeur de retour

Un générateur produisant des tableaux contenant les blocs de l'entrée. L'entrée est consommée de façon lazy.

## Voir aussi

- [`filter`](/fr/v1/api/generator/filter) - Filtre les éléments d'un générateur
- [`map`](/fr/v1/api/generator/map) - Transforme les éléments d'un générateur
- [`reduce`](/fr/v1/api/generator/reduce) - Réduit un générateur en une valeur
