---
outline: [2, 3]
prev:
  text: "asin"
  link: "/v1/api/number/asin/fr"
next:
  text: "atan"
  link: "/v1/api/number/atan/fr"
---

# acos

La méthode **`acos()`** retourne l'arc cosinus d'un nombre, c'est-à-dire l'angle (en radians) dont le cosinus est égal à la valeur donnée. C'est la fonction inverse de `cos()`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/acos/examples/tryout.doc.ts"
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

- [`cos`](/v1/api/number/cos/fr) - Calcule le cosinus d'un angle
- [`asin`](/v1/api/number/asin/fr) - Calcule l'arc sinus
- [`atan`](/v1/api/number/atan/fr) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.acos()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/acos)
