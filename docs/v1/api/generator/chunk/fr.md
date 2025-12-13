---
outline: [2, 3]
prev:
  text: "filter"
  link: "/v1/api/generator/filter/fr"
next:
  text: "reduce"
  link: "/v1/api/generator/reduce/fr"
---

# chunk

La fonction **`chunk()`** découpe un itérable (générateur ou tableau) en blocs de taille fixe et renvoie un générateur de tableaux. Le dernier bloc peut être plus court si la taille ne divise pas exactement l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/chunk/examples/tryout.doc.ts"
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

- [`filter`](/v1/api/generator/filter/fr) - Filtre les éléments d'un générateur
- [`map`](/v1/api/generator/map/fr) - Transforme les éléments d'un générateur
- [`reduce`](/v1/api/generator/reduce/fr) - Réduit un générateur en une valeur
