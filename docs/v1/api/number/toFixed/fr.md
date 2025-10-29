---
outline: [2, 3]
prev:
  text: "sqrt"
  link: "/v1/api/number/sqrt/fr"
next:
  text: "sin"
  link: "/v1/api/number/sin/fr"
---

# toFixed

La méthode **`toFixed()`** formate un nombre en utilisant la notation à point fixe avec un nombre spécifié de décimales. Elle retourne une représentation sous forme de chaîne du nombre.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/toFixed/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function toFixed<GenericValue extends number>(
	value: GenericValue,
	digits: number
): string
```

### Signature currifiée

```typescript
function toFixed<GenericValue extends number>(
	digits: number
): (value: GenericValue) => string
```

## Paramètres

- `value` : Le nombre à formater (uniquement en signature classique).
- `digits` : Le nombre de chiffres après la virgule (entre 0 et 100).

## Valeur de retour

**Signature classique** : retourne une chaîne de caractères représentant le nombre avec le nombre de décimales spécifié.

**Signature currifiée** : retourne une fonction qui prend une valeur et la formate avec le nombre de décimales spécifié.

## Exemples

### Formater des prix

<MonacoTSEditor
  	src="/v1/api/number/toFixed/examples/formatPrices.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Formater des mesures scientifiques

<MonacoTSEditor
  	src="/v1/api/number/toFixed/examples/scientific.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`round`](/v1/api/number/round/fr) - Arrondit un nombre à l'entier le plus proche
- [`floor`](/v1/api/number/floor/fr) - Arrondit un nombre vers le bas
- [`ceil`](/v1/api/number/ceil/fr) - Arrondit un nombre vers le haut

## Sources

- [MDN Web Docs - Number.prototype.toFixed()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
