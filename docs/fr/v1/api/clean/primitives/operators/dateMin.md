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

`dateMin()` retourne la plus petite date d'une liste (wrappée ou `DDate.TheDate`). Peut s'utiliser en version variadique ou en version partiellement appliquée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/dateMin/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique (variadique)

```typescript
function dateMin(...input: AnyTuple<Date | TheDate>): Date
```

### Signature partielle

```typescript
function dateMin(
	first: Date | TheDate
): (...rest: (Date | TheDate)[]) => Date
```

## Paramètres

- `input` : dates à comparer (au moins une).
- `first` / `rest` : version partielle (`dateMin(first)(...rest)`).

## Valeur de retour

Une `Date` wrappée contenant la plus petite date.

## Voir aussi

- [`dateMax`](/fr/v1/api/clean/primitives/operators/dateMax)
