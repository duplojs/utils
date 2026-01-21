---
outline: [2, 3]
description: "La fonction isAbsolute() vérifie si un chemin est absolu (POSIX, UNC ou lecteur Windows) et agit comme type guard."
prev:
  text: "Path"
  link: "/fr/v1/api/common/path/"
next:
  text: "isUnixPath"
  link: "/fr/v1/api/common/path/isUnixPath"
---

# isAbsolute

La fonction **`isAbsolute()`** vérifie si un chemin est absolu (POSIX, UNC ou lecteur Windows) et agit comme type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/isAbsolute/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function isAbsolute<
	GenericPath extends string
>(
	path: GenericPath
): path is Extract<
	GenericPath,
	`/${string}` | `\\${string}` | `${string}:${"/" | "\\"}${string}`
>;
```

## Paramètres

- `path` : Le chemin à tester.

## Valeur de retour

Un booléen et un type guard qui affine le type du chemin lorsqu'il est absolu.

## Voir aussi

- [`isUnixPath`](/fr/v1/api/common/path/isUnixPath) - Vérifie la présence de séparateurs Unix
- [`normalize`](/fr/v1/api/common/path/normalize) - Normalise un chemin
