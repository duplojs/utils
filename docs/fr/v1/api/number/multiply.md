---
outline: [2, 3]
prev:
  text: "subtract"
  link: "/fr/v1/api/number/subtract"
next:
  text: "divide"
  link: "/fr/v1/api/number/divide"
---

# multiply

La méthode **`multiply()`** multiplie deux nombres entre eux. Elle peut être utilisée en mode currifié pour créer des fonctions de multiplication partiellement appliquées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/multiply/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function multiply<
	GenericInput extends number
>(
	input: GenericInput,
	operand: number
): number
```

### Signature currifiée

```typescript
function multiply<
	GenericInput extends number
>(
	operand: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre à multiplier (multiplicande, uniquement en signature classique).
- `operand` : Le nombre multiplicateur.

## Valeur de retour

retourne le produit de la multiplication des deux nombres (`input * operand`).

## Voir aussi

- [`divide`](/fr/v1/api/number/divide) - Divise deux nombres
- [`add`](/fr/v1/api/number/add) - Additionne deux nombres
- [`subtract`](/fr/v1/api/number/subtract) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Multiplication (*)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
