---
outline: [2, 3]
description: "La fonction resolveRelative() resout plusieurs segments en un seul chemin de type POSIX."
prev:
  text: "isAbsolute"
  link: "/fr/v1/api/common/path/isAbsolute"
next:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
---

# resolveRelative

La fonction **`resolveRelative()`** resout plusieurs segments en un seul chemin de type POSIX.

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
	...segments: readonly string[]
): string;
```

## Parametres

- `segments` : Les segments a resoudre.

## Valeur de retour

Un chemin resolu. Les segments absolus reinitialisent la base et les `..` peuvent rester en tete lorsqu'ils depassent la racine.

## Voir aussi

- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Resout une liste de segments depuis une origine
