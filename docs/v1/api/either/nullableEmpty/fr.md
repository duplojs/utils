---
outline: [2, 3]
prev:
  text: "nullable"
  link: "/v1/api/either/nullable/fr"
next:
  text: "nullableFilled"
  link: "/v1/api/either/nullableFilled/fr"
---

# nullableEmpty

Construit explicitement un `EitherLeft<"nullable">` contenant `null`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullableEmpty/examples/tryout.doc.ts"
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

- [`nullableFilled`](/v1/api/either/nullableFilled/fr).
- [`whenIsNullableEmpty`](/v1/api/either/whenIsNullableEmpty/fr).
