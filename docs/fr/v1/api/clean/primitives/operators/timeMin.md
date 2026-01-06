---
outline: [2, 3]
prev:
  text: "timeLessThan"
  link: "/fr/v1/api/clean/primitives/operators/timeLessThan"
next:
  text: "timeMax"
  link: "/fr/v1/api/clean/primitives/operators/timeMax"
---

# timeMin

`timeMin()` retourne la plus petite durée d'une liste (wrappée ou `DDate.TheTime`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeMin/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function timeMin(input: AnyTuple<Time | TheTime>): Time
```

## Paramètres

- `input` : durées à comparer (au moins une).

## Valeur de retour

Un `Time` wrappé contenant la plus petite durée.

## Voir aussi

- [`timeMax`](/fr/v1/api/clean/primitives/operators/timeMax)
