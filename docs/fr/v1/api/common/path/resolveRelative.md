---
outline: [2, 3]
description: "La fonction resolveRelative() résout plusieurs segments en un seul chemin de type POSIX."
prev:
  text: "fix"
  link: "/fr/v1/api/common/path/fix"
next:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
---

# resolveRelative

La fonction **`resolveRelative()`** résout plusieurs segments en un seul chemin de type POSIX.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveRelative/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function resolveRelative(
    segments: readonly string[]
): string;
```

## Paramètres

- `segments` : Tableau des segments à résoudre.

## Valeur de retour

Un chemin résolu. Les segments absolus réinitialisent la base et les `..` peuvent rester en tête lorsqu'ils dépassent la racine.

## Voir aussi

- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Résout une liste de segments depuis une origine
