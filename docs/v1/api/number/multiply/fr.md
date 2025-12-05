---
outline: [2, 3]
prev:
  text: "subtract"
  link: "/v1/api/number/subtract/fr"
next:
  text: "divide"
  link: "/v1/api/number/divide/fr"
---

# multiply

La méthode **`multiply()`** multiplie deux nombres entre eux. Elle peut être utilisée en mode currifié pour créer des fonctions de multiplication partiellement appliquées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/multiply/examples/tryout.doc.ts"
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

**Signature classique** : retourne le produit de la multiplication des deux nombres.

**Signature currifiée** : retourne une fonction qui prend une valeur et la multiplie par l'opérande.

## Voir aussi

- [`divide`](/v1/api/number/divide/fr) - Divise deux nombres
- [`add`](/v1/api/number/add/fr) - Additionne deux nombres
- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Multiplication (*)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
