---
outline: [2, 3]
prev:
  text: "subtract"
  link: "/v1/api/clean/primitives/operators/operators/subtract/fr"
next:
  text: "divide"
  link: "/v1/api/clean/primitives/operators/operators/divide/fr"
---

# multiply

`multiply()` multiplie un `Number` (wrappé) par un multiplicateur (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/multiply/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function multiply(
	value: Number, 
	multiplier: Number | number
): Number
```

### Signature currifiée

```typescript
function multiply(
	multiplier: Number | number
): (value: Number) => Number
```

## Paramètres

- `value` : valeur de base (signature classique uniquement).
- `multiplier` : multiplicateur.

## Valeur de retour

Un `Number` wrappé contenant le produit.

## Voir aussi

- [`add`](/v1/api/clean/add/fr)
- [`divide`](/v1/api/clean/divide/fr)
