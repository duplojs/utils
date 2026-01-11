---
outline: [2, 3]
description: "La méthode toFixed() formate un nombre en utilisant la notation à point fixe avec un nombre spécifié de décimales. Elle retourne une représentation sous forme de chaîne du nombre."
prev:
  text: "sqrt"
  link: "/fr/v1/api/number/sqrt"
next:
  text: "sin"
  link: "/fr/v1/api/number/sin"
---

# toFixed

La méthode **`toFixed()`** formate un nombre en utilisant la notation à point fixe avec un nombre spécifié de décimales. Elle retourne une représentation sous forme de chaîne du nombre.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/toFixed/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function toFixed<
	GenericInput extends number
>(
	input: GenericInput,
	digits: number
): string
```

### Signature currifiée

```typescript
function toFixed<
	GenericInput extends number
>(
	digits: number
): (input: GenericInput) => string
```

## Paramètres

- `input` : Le nombre à formater (uniquement en signature classique).
- `digits` : Le nombre de chiffres après la virgule (entre 0 et 100).

## Valeur de retour

retourne une chaîne de caractères représentant le nombre avec le nombre de décimales spécifié.

## Voir aussi

- [`round`](/fr/v1/api/number/round) - Arrondit un nombre à l'entier le plus proche
- [`floor`](/fr/v1/api/number/floor) - Arrondit un nombre vers le bas
- [`ceil`](/fr/v1/api/number/ceil) - Arrondit un nombre vers le haut

## Sources

- [MDN Web Docs - Number.prototype.toFixed()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
