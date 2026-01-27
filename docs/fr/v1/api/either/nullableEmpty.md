---
outline: [2, 3]
description: "Construit explicitement un Left<\"nullable\"> contenant null."
prev:
  text: "nullable"
  link: "/fr/v1/api/either/nullable"
next:
  text: "nullableFilled"
  link: "/fr/v1/api/either/nullableFilled"
---

# nullableEmpty

Construit explicitement un `Left<"nullable">` contenant `null`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function nullableEmpty(): NullableEmpty;
```

## Paramètres

Aucun.

## Valeur de retour

Un `NullableEmpty` représentant l'absence.

## Voir aussi

- [`nullableFilled`](/fr/v1/api/either/nullableFilled).
- [`whenIsNullableEmpty`](/fr/v1/api/either/whenIsNullableEmpty).
