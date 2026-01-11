---
outline: [2, 3]
description: "La méthode power() élève un nombre à une puissance donnée. Elle calcule la valeur d'un nombre multiplié par lui-même un certain nombre de fois."
prev:
  text: "modulo"
  link: "/fr/v1/api/number/modulo"
next:
  text: "negate"
  link: "/fr/v1/api/number/negate"
---

# power

La méthode **`power()`** élève un nombre à une puissance donnée. Elle calcule la valeur d'un nombre multiplié par lui-même un certain nombre de fois.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/power/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function power<
	GenericInput extends number
>(
	input: GenericInput,
	exponent: number
): number
```

### Signature currifiée

```typescript
function power<
	GenericInput extends number
>(
	exponent: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre de base à élever à une puissance (uniquement en signature classique).
- `exponent` : L'exposant auquel élever le nombre.

## Valeur de retour

retourne le résultat de `input` élevé à la puissance `exponent`. Équivaut à `value ** exponent` ou `Math.pow(value, exponent)`.

## Voir aussi

- [`multiply`](/fr/v1/api/number/multiply) - Multiplie deux nombres
- [`sqrt`](/fr/v1/api/number/sqrt) - Calcule la racine carrée

## Sources

- [MDN Web Docs - Math.pow()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
