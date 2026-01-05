---
outline: [2, 3]
description: "La méthode reduce() agrège les éléments d'un tableau de gauche à droite en appliquant une fonction qui transporte un état. Elle supporte les valeurs primitives mais aussi des états complexes via reduceFrom() et permet de quitter la boucle à tout moment grâce à exit()."
prev:
  text: "sort"
  link: "/fr/v1/api/array/sort"
next:
  text: "reduceRight"
  link: "/fr/v1/api/array/reduceRight"
---

# reduce

La méthode **`reduce()`** agrège les éléments d'un tableau de gauche à droite en appliquant une fonction qui transporte un état. Elle supporte les valeurs primitives mais aussi des états complexes via `reduceFrom()` et permet de quitter la boucle à tout moment grâce à `exit()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/reduce/tryout.doc.ts"
  majorVersion="v1"
  height="850px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function reduce<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>
>(
	input: GenericInput,
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput[number],
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit
): ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"])
```

### Signature currifiée

```typescript
function reduce<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends ArrayEligibleReduceFromValue,
	GenericExit extends ArrayReduceExit = ArrayReduceExit<never>
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: ArrayReduceFunctionParams<
			GenericInput[number],
			ArrayReduceFromValue<GenericReduceFrom>
		>
	) => ArrayReduceNext<ArrayReduceFromValue<GenericReduceFrom>> | GenericExit
): (
	input: GenericInput
) => ArrayReduceFromValue<GenericReduceFrom> | (IsEqual<GenericExit, ArrayReduceExit> extends true ? never : GenericExit["-exit"])
```

### Paramètres auxiliaires

```typescript
interface ArrayReduceNext<GenericOutput = unknown> {
	"-next": GenericOutput;
}

interface ArrayReduceExit<GenericOutput = unknown> {
	"-exit": GenericOutput;
}

interface ArrayReduceFunctionParams<
	GenericInputArray extends readonly unknown[] = unknown[],
	GenericOutput extends unknown = unknown
> {
	element: GenericInputArray[number];
	index: number;
	lastValue: GenericOutput;
	self: GenericInputArray;
	nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
	next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
	exit<GenericExitValue extends unknown>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
	nextPush: GenericOutput extends readonly any[] ? (array: GenericOutput, ...values: GenericOutput) => ArrayReduceNext<GenericOutput> : undefined;
}

function reduceFrom<
	GenericInput extends unknown
>(input: GenericInput): ArrayReduceFromResult<GenericInput>;
```

## Paramètres

- `input` : Le tableau à agréger.
- `startValue` : Valeur initiale. Pour des objets/tuples, enveloppez-la avec `reduceFrom()` afin de conserver un typage précis.
- `theFunction` : Fonction appelée pour chaque élément. Elle reçoit l'élément, l'index, la dernière valeur, le tableau complet et des helpers (`next`, `nextWithObject`, `nextPush`, `exit`).
- `params.element` : L'élément courant du tableau.
- `params.index` : Position de l'élément dans le tableau.
- `params.self` : Le tableau complet (utile pour comparer à la longueur ou accéder à un voisin).
- `params.lastValue` : État accumulé avant l'élément courant.
- `params.next()` : Retourne la nouvelle valeur à propager à l'itération suivante.
- `params.nextWithObject()` : Raccourci pour fusionner partiellement un objet tout en conservant le typage.
- `params.nextPush()` : Si `lastValue` est un tableau, ajoute un ou plusieurs éléments et renvoie le nouvel état en une étape.
- `params.exit()` : Permet d'arrêter immédiatement la réduction et de retourner une valeur personnalisée.

## Valeur de retour

La dernière valeur fournie à `next()`, `nextWithObject()` ou `nextPush()`, ou bien la valeur passée à `exit()` si une sortie anticipée est déclenchée. Le tableau original reste inchangé.

## Voir aussi

- [`reduceRight`](/fr/v1/api/array/reduceRight) - Parcourt le tableau de droite à gauche
- [`sum`](/fr/v1/api/array/sum) - Additionne directement tous les nombres d'un tableau

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
