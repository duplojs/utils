---
outline: [2, 3]
description: "divide() divise un Number wrappé par un diviseur validé avec la contrainte NotZero. Supporte la version currifiée."
prev:
  text: "multiply"
  link: "/fr/v1/api/clean/primitives/operators/multiply"
next:
  text: "min"
  link: "/fr/v1/api/clean/primitives/operators/min"
---

# divide

`divide()` divise un `Number` wrappé par un diviseur validé avec la contrainte `NotZero`. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/divide/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

### Signature classique

```typescript
function divide(
	value: Number, 
	divisor: NotZero
): Number
```

### Signature currifiée

```typescript
function divide(
	divisor: NotZero
): (value: Number) => Number
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `divisor` : diviseur validé avec `C.NotZero`.

## Valeur de retour

Un `Number` wrappé contenant le quotient.

## Voir aussi

- [`multiply`](/fr/v1/api/clean/primitives/operators/multiply)
- [`NotZero`](/fr/v1/api/clean/constraints#notzero)
