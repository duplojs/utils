---
outline: [2, 3]
prev:
  text: "multiply"
  link: "/v1/api/clean/multiply/fr"
next:
  text: "min"
  link: "/v1/api/clean/min/fr"
---

# divide

`divide()` divise un `Number` (wrappé) par un diviseur (wrappé ou brut). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/divide/examples/tryout.doc.ts"
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

- [`multiply`](/v1/api/clean/multiply/fr)
