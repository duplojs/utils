---
outline: [2, 3]
prev:
  text: "timeMin"
  link: "/fr/v1/api/clean/primitives/operators/timeMin"
next:
  text: "sort"
  link: "/fr/v1/api/clean/primitives/operators/sort"
---

# timeMax

`timeMax()` retourne la plus grande durée d'une liste (wrappée ou `DDate.TheTime`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/timeMax/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function timeMax(input: AnyTuple<Time | TheTime>): Time
```

## Paramètres

- `input` : durées à comparer (au moins une).

## Valeur de retour

Un `Time` wrappé contenant la plus grande durée.

## Voir aussi

- [`timeMin`](/fr/v1/api/clean/primitives/operators/timeMin)
