---
outline: [2, 3]
prev:
  text: "dateLessThan"
  link: "/fr/v1/api/clean/primitives/operators/dateLessThan"
next:
  text: "dateMax"
  link: "/fr/v1/api/clean/primitives/operators/dateMax"
---

# dateMin

`dateMin()` retourne la plus petite date d'un tuple (wrappée ou `DDate.TheDate`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMin/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function dateMin(input: AnyTuple<Date | TheDate>): Date
```

## Paramètres

- `input` : tuple de dates à comparer (au moins une).

## Valeur de retour

Une `Date` wrappée contenant la plus petite date.

## Voir aussi

- [`dateMax`](/fr/v1/api/clean/primitives/operators/dateMax)
