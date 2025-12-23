---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/fr/v1/api/clean/primitives/operators/multiply"
next:
  text: "min"
  link: "/fr/v1/api/clean/primitives/operators/min"
---

# divide

`divide()` divise un `Number` (wrappé) par un diviseur (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/divide/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function divide(
	value: Number, 
	divisor: Number | number
): Number
```

### Signature currifiée

```typescript
function divide(
	divisor: Number | number
): (value: Number) => Number
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `divisor` : diviseur.

## Valeur de retour

Un `Number` wrappé contenant le quotient.

## Voir aussi

- [`multiply`](/fr/v1/api/clean/primitives/operators/multiply)
