---
outline: [2, 3]
prev:
  text: "dateMin"
  link: "/fr/v1/api/clean/primitives/operators/dateMin"
next:
  text: "timeGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/timeGreaterThan"
---

# dateMax

`dateMax()` retourne la plus grande date d'une liste (wrappée ou `DDate.TheDate`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMax/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function dateMax(input: AnyTuple<Date | TheDate>): Date
```

## Paramètres

- `input` : dates à comparer (au moins une).

## Valeur de retour

Une `Date` wrappée contenant la plus grande date.

## Voir aussi

- [`dateMin`](/fr/v1/api/clean/primitives/operators/dateMin)
