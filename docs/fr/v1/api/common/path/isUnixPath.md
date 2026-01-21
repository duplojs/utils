---
outline: [2, 3]
description: "La fonction isUnixPath() vérifie si un chemin utilise uniquement des séparateurs Unix et agit comme type guard."
prev:
  text: "isAbsolute"
  link: "/fr/v1/api/common/path/isAbsolute"
next:
  text: "normalize"
  link: "/fr/v1/api/common/path/normalize"
---

# isUnixPath

La fonction **`isUnixPath()`** vérifie si un chemin utilise uniquement des séparateurs Unix et agit comme type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/isUnixPath/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function isUnixPath<
	GenericPath extends string
>(
	path: GenericPath
): path is Exclude<GenericPath, `${string}\\${string}`>;
```

## Paramètres

- `path` : Le chemin à tester.

## Valeur de retour

Un booléen et un type guard qui affine le type du chemin lorsqu'il est au format Unix.

## Voir aussi

- [`isAbsolute`](/fr/v1/api/common/path/isAbsolute) - Vérifie si un chemin est absolu
- [`normalize`](/fr/v1/api/common/path/normalize) - Normalise un chemin
