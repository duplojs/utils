---
outline: [2, 3]
description: "La fonction resolveFrom() résout une liste de segments à partir d'une origine et retourne un Either."
prev:
  text: "resolveRelative"
  link: "/fr/v1/api/common/path/resolveRelative"
next:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

La fonction **`resolveFrom()`** résout une liste de segments à partir d'une origine et retourne un Either.
Elle résout les segments dans l'ordre via `resolveRelative` et ne réussit que si le résultat est absolu.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

### Signature classique

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	paths: GenericPaths,
	origin: string
): DEither.EitherFail | DEither.EitherSuccess<string>;
```

### Signature currifiée

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	origin: string
): (paths: GenericPaths) => DEither.EitherFail | DEither.EitherSuccess<string>;
```

## Paramètres

- `paths` : Les segments à résoudre.
- `origin` : Le chemin de départ.

## Valeur de retour

Un Either `success` avec le chemin résolu si le résultat est absolu, sinon `fail`.

## Voir aussi

- [`resolveRelative`](/fr/v1/api/common/path/resolveRelative) - Resout plusieurs segments en un seul chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent d'un chemin
