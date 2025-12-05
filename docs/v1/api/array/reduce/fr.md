---
outline: [2, 3]
prev:
  text: "sortString"
  link: "/v1/api/array/sortString/fr"
next:
  text: "reduceRight"
  link: "/v1/api/array/reduceRight/fr"
---

# reduce

La méthode **`reduce()`** agrège les éléments d'un tableau de gauche à droite en appliquant une fonction qui transporte un état. Elle supporte les valeurs primitives mais aussi des états complexes via `reduceFrom()` et permet de quitter la boucle à tout moment grâce à `exit()`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/reduce/examples/tryout.doc.ts"
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
	GenericElement extends unknown = unknown, 
	GenericOutput extends unknown = unknown
> {
    element: GenericElement;
    index: number;
    lastValue: GenericOutput;
    nextWithObject: GenericOutput extends object ? (object1: GenericOutput, object2: Partial<GenericOutput>) => ArrayReduceNext<GenericOutput> : undefined;
    next(output: GenericOutput): ArrayReduceNext<GenericOutput>;
    exit<GenericExitValue extends unknown>(output: GenericExitValue): ArrayReduceExit<GenericExitValue>;
}

function reduceFrom<
	GenericInput extends unknown
>(input: GenericInput): ArrayReduceFromResult<GenericInput>;
```

## Paramètres

- `input` : Le tableau à agréger.
- `startValue` : Valeur initiale. Pour des objets/tuples, enveloppez-la avec `reduceFrom()` afin de conserver un typage précis.
- `theFunction` : Fonction appelée pour chaque élément. Elle reçoit l'élément, l'index, la dernière valeur et des helpers `next`, `nextWithObject` et `exit`.
- `params.element` : L'élément courant du tableau.
- `params.index` : Position de l'élément dans le tableau.
- `params.lastValue` : État accumulé avant l'élément courant.
- `params.next()` : Retourne la nouvelle valeur à propager à l'itération suivante.
- `params.nextWithObject()` : Raccourci pour fusionner partiellement un objet tout en conservant le typage.
- `params.exit()` : Permet d'arrêter immédiatement la réduction et de retourner une valeur personnalisée.

## Valeur de retour

La dernière valeur fournie à `next()` (ou à `nextWithObject()`), ou bien la valeur passée à `exit()` si une sortie anticipée est déclenchée. Le tableau original reste inchangé.

## Voir aussi

- [`reduceRight`](/v1/api/array/reduceRight/fr) - Parcourt le tableau de droite à gauche
- [`sum`](/v1/api/array/sum/fr) - Additionne directement tous les nombres d'un tableau

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
