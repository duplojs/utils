---
outline: [2, 3]
prev:
  text: "floor"
  link: "/fr/v1/api/number/floor"
next:
  text: "max"
  link: "/fr/v1/api/number/max"
---

# trunc

La méthode **`trunc()`** tronque la partie décimale d'un nombre, retournant uniquement la partie entière. Contrairement à `floor()`, elle se comporte de manière identique pour les nombres positifs et négatifs en supprimant simplement les décimales.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/trunc/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function trunc<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre dont on souhaite tronquer la partie décimale.

## Valeur de retour

La partie entière du nombre donné (supprime les décimales sans arrondir).

## Voir aussi

- [`round`](/fr/v1/api/number/round) - Arrondit à l'entier le plus proche
- [`floor`](/fr/v1/api/number/floor) - Arrondit vers le bas
- [`ceil`](/fr/v1/api/number/ceil) - Arrondit vers le haut

## Sources

- [MDN Web Docs - Math.trunc()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
