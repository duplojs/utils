---
outline: [2, 3]
prev:
  text: "asyncLoop"
  link: "/fr/v1/api/generator/asyncLoop"
next:
  text: "asyncMap"
  link: "/fr/v1/api/generator/asyncMap"
---

# map

La fonction **`map()`** transforme chaque élément d'un générateur en appliquant une fonction de transformation. Retourne un nouveau générateur avec les valeurs transformées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/map/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: Iterable<GenericInput>,
	theFunction: (
		arg: GenericInput, 
		params: GeneratorMapParams
	) => GenericOutput
): Generator<GenericOutput, unknown, unknown>
```

### Signature currifiée

```typescript
function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (
		arg: GenericInput, 
		params: GeneratorMapParams
	) => GenericOutput
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

- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Version asynchrone de map
- [`filter`](/fr/v1/api/generator/filter) - Filtre les éléments d'un générateur
- [`reduce`](/fr/v1/api/generator/reduce) - Réduit un générateur à une valeur

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
