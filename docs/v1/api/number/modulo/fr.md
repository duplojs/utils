---
outline: [2, 3]
prev:
  text: "divide"
  link: "/v1/api/number/divide/fr"
next:
  text: "power"
  link: "/v1/api/number/power/fr"
---

# modulo

La méthode **`modulo()`** retourne le reste de la division euclidienne de deux nombres. Cette opération est utile pour déterminer la parité, créer des rotations circulaires ou gérer la pagination.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/modulo/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function modulo<GenericValue extends number>(
	value: GenericValue,
	divisor: number
): number
```

### Signature currifiée

```typescript
function modulo<GenericValue extends number>(
	divisor: number
): (value: GenericValue) => number
```

## Paramètres

- `value` : Le nombre dividende (le nombre à diviser, uniquement en signature classique).
- `divisor` : Le nombre diviseur (le nombre par lequel diviser).

## Valeur de retour

**Signature classique** : retourne le reste de la division euclidienne de `value` par `divisor`. Le résultat a le même signe que le dividende.

**Signature currifiée** : retourne une fonction qui prend une valeur et retourne le reste de sa division par le diviseur.

## Exemples

### Vérifier la parité

<MonacoTSEditor
  	src="/v1/api/number/modulo/examples/checkParity.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Calculer la pagination

<MonacoTSEditor
  	src="/v1/api/number/modulo/examples/pagination.doc.ts"
  	majorVersion="v1"
	height="650px"
/>

### Rotation circulaire

<MonacoTSEditor
  	src="/v1/api/number/modulo/examples/circularRotation.doc.ts"
  	majorVersion="v1"
	height="600px"
/>

## Voir aussi

- [`divide`](/v1/api/number/divide/fr) - Divise deux nombres
- [`floor`](/v1/api/number/floor/fr) - Arrondit un nombre à l'entier inférieur
- [`equals`](/v1/api/number/equals/fr) - Vérifie l'égalité entre deux nombres

## Sources

- [MDN Web Docs - Reste (%)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
