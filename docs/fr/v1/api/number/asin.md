---
outline: [2, 3]
description: "La méthode asin() retourne l'arc sinus d'un nombre, c'est-à-dire l'angle (en radians) dont le sinus est égal à la valeur donnée. C'est la fonction inverse de sin()."
prev:
  text: "tan"
  link: "/fr/v1/api/number/tan"
next:
  text: "acos"
  link: "/fr/v1/api/number/acos"
---

# asin

La méthode **`asin()`** retourne l'arc sinus d'un nombre, c'est-à-dire l'angle (en radians) dont le sinus est égal à la valeur donnée. C'est la fonction inverse de `sin()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/asin/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

```typescript
function asin<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Un nombre entre -1 et 1 représentant le sinus d'un angle.

## Valeur de retour

L'angle en radians (entre -π/2 et π/2) dont le sinus est égal à la valeur donnée. Retourne `NaN` si la valeur est hors de l'intervalle [-1, 1].

## Voir aussi

- [`sin`](/fr/v1/api/number/sin) - Calcule le sinus d'un angle
- [`acos`](/fr/v1/api/number/acos) - Calcule l'arc cosinus
- [`atan`](/fr/v1/api/number/atan) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.asin()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/asin)
