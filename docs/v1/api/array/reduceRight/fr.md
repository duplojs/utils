---
outline: [2, 3]
prev:
  text: "reduce"
  link: "/v1/api/array/reduce/fr"
next:
  text: "join"
  link: "/v1/api/array/join/fr"
---

# reduceRight

La méthode **`reduceRight()`** fonctionne comme `reduce()` mais parcourt le tableau de droite à gauche. Elle est utile pour composer des fonctions, reconstruire une structure depuis la fin ou traiter une pile.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/reduceRight/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function reduceRight<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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
function reduceRight<
	GenericInput extends readonly unknown[],
	GenericReduceFrom extends number | string | bigint | boolean | ArrayReduceFromResult,
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

## Paramètres

Identiques à ceux de [`reduce`](/v1/api/array/reduce/fr), mais l'itération commence par le dernier élément du tableau.  
En particulier :
- `params.self` expose le tableau complet (pratique pour connaître la longueur ou comparer un index).
- `params.nextPush()` ajoute des valeurs à `lastValue` lorsqu'il s'agit d'un tableau, sans devoir appeler `next()` après un `push`.

## Valeur de retour

Le résultat de l'accumulation de droite à gauche (via `next()`, `nextWithObject()` ou `nextPush()`), ou la valeur passée à `exit()` si une sortie anticipée se produit.

## Voir aussi

- [`reduce`](/v1/api/array/reduce/fr) - Version gauche → droite
- [`join`](/v1/api/array/join/fr) - Concatène des chaînes avec un séparateur explicite

## Sources

- [MDN Web Docs - Array.prototype.reduceRight()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
