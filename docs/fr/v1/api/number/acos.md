---
outline: [2, 3]
prev:
  text: "asin"
  link: "/fr/v1/api/number/asin"
next:
  text: "atan"
  link: "/fr/v1/api/number/atan"
---

# acos

La méthode **`acos()`** retourne l'arc cosinus d'un nombre, c'est-à-dire l'angle (en radians) dont le cosinus est égal à la valeur donnée. C'est la fonction inverse de `cos()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/acos/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function acos<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Un nombre entre -1 et 1 représentant le cosinus d'un angle.

## Valeur de retour

L'angle en radians (entre 0 et π) dont le cosinus est égal à la valeur donnée. Retourne `NaN` si la valeur est hors de l'intervalle [-1, 1].

## Voir aussi

- [`cos`](/fr/v1/api/number/cos) - Calcule le cosinus d'un angle
- [`asin`](/fr/v1/api/number/asin) - Calcule l'arc sinus
- [`atan`](/fr/v1/api/number/atan) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.acos()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
