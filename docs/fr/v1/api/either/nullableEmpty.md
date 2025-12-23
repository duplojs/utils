---
outline: [2, 3]
prev:
  text: "nullable"
  link: "/fr/v1/api/either/nullable"
next:
  text: "nullableFilled"
  link: "/fr/v1/api/either/nullableFilled"
---

# nullableEmpty

Construit explicitement un `EitherLeft<"nullable">` contenant `null`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function nullableEmpty(): EitherNullableEmpty;
```

## Paramètres

Aucun.

## Valeur de retour

Un `EitherNullableEmpty` représentant l'absence.

## Voir aussi

- [`nullableFilled`](/fr/v1/api/either/nullableFilled).
- [`whenIsNullableEmpty`](/fr/v1/api/either/whenIsNullableEmpty).
