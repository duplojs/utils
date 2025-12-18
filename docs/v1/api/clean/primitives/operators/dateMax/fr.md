---
outline: [2, 3]
prev:
  text: "dateMin"
  link: "/v1/api/clean/primitives/operators/dateMin/fr"
next:
  text: "sort"
  link: "/v1/api/clean/primitives/operators/sort/fr"
---

# dateMax

`dateMax()` retourne la plus grande date d'une liste (wrappée ou `DDate.TheDate`). Peut s'utiliser en version variadique ou en version partiellement appliquée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/dateMax/examples/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique (variadique)

```typescript
function dateMax(...input: AnyTuple<Date | TheDate>): Date
```

### Signature partielle

```typescript
function dateMax(
	first: Date | TheDate
): (...rest: (Date | TheDate)[]) => Date
```

## Paramètres

- `input` : dates à comparer (au moins une).
- `first` / `rest` : version partielle (`dateMax(first)(...rest)`).

## Valeur de retour

Une `Date` wrappée contenant la plus grande date.

## Voir aussi

- [`dateMin`](/v1/api/clean/primitives/operators/dateMin/fr)
