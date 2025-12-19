---
outline: [2, 3]
prev:
  text: "divide"
  link: "/fr/v1/api/number/divide"
next:
  text: "power"
  link: "/fr/v1/api/number/power"
---

# modulo

La méthode **`modulo()`** retourne le reste de la division euclidienne de deux nombres. Cette opération est utile pour déterminer la parité, créer des rotations circulaires ou gérer la pagination.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/modulo/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function modulo<
	GenericInput extends number
>(
	input: GenericInput,
	divisor: number
): number
```

### Signature currifiée

```typescript
function modulo<
	GenericInput extends number
>(
	divisor: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre dividende (le nombre à diviser, uniquement en signature classique).
- `divisor` : Le nombre diviseur (le nombre par lequel diviser).

## Valeur de retour

**Signature classique** : retourne le reste de la division euclidienne de `input` par `divisor`. Le résultat a le même signe que le dividende.

**Signature currifiée** : retourne une fonction qui prend une valeur et retourne le reste de sa division par le diviseur.

## Voir aussi

- [`divide`](/fr/v1/api/number/divide) - Divise deux nombres
- [`floor`](/fr/v1/api/number/floor) - Arrondit un nombre à l'entier inférieur

## Sources

- [MDN Web Docs - Reste (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
