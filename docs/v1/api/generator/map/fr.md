---
outline: [2, 3]
prev:
  text: "asyncLoop"
  link: "/v1/api/generator/asyncLoop/fr"
next:
  text: "asyncMap"
  link: "/v1/api/generator/asyncMap/fr"
---

# map

La fonction **`map()`** transforme chaque élément d'un générateur en appliquant une fonction de transformation. Retourne un nouveau générateur avec les valeurs transformées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/map/examples/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

### Signature classique

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: Iterable<GenericInput>,
	theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput
): Generator<GenericOutput, unknown, unknown>
```

### Signature currifiée

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput
): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>
```

## Paramètres

- `iterator` : Le générateur à transformer
- `theFunction` : Fonction de transformation qui reçoit :
  - `arg` : L'élément courant
  - `params.index` : L'index de l'élément

## Valeur de retour

Un nouveau `Generator` émettant les valeurs transformées.

## Voir aussi

- [`asyncMap`](/v1/api/generator/asyncMap/fr) - Version asynchrone de map
- [`filter`](/v1/api/generator/filter/fr) - Filtre les éléments d'un générateur
- [`reduce`](/v1/api/generator/reduce/fr) - Réduit un générateur à une valeur

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
