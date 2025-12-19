---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/fr/v1/api/number/multiply"
next:
  text: "modulo"
  link: "/fr/v1/api/number/modulo"
---

# divide

La méthode **`divide()`** effectue la division de deux nombres. Elle peut être utilisée de manière currifiée pour créer des fonctions de division réutilisables.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/divide/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function divide<
	GenericInput extends number
>(
	input: GenericInput,
	divisor: number
): number
```

### Signature currifiée

```typescript
function divide<
	GenericInput extends number
>(
	divisor: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre à diviser (dividende, uniquement en signature classique).
- `divisor` : Le nombre par lequel diviser (diviseur).

## Valeur de retour

**Signature classique** : retourne le résultat de la division `value / divisor`.

**Signature currifiée** : retourne une fonction qui prend une valeur et la divise par le diviseur.

## Voir aussi

- [`multiply`](/fr/v1/api/number/multiply) - Multiplie deux nombres
- [`modulo`](/fr/v1/api/number/modulo) - Calcule le reste d'une division
- [`add`](/fr/v1/api/number/add) - Additionne deux nombres
- [`subtract`](/fr/v1/api/number/subtract) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Division (/)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Division)
