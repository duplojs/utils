---
outline: [2, 3]
description: "La fonction resolveFrom() résout une liste de segments à partir d'une origine."
prev:
  text: "join"
  link: "/fr/v1/api/common/path/join"
next:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

La fonction **`resolveFrom()`** résout une liste de segments à partir d'une origine.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	paths: GenericPaths,
	origin: string
): string;
```

### Signature currifiée

```typescript
function resolveFrom<
	GenericPaths extends readonly string[]
>(
	origin: string
): (paths: GenericPaths) => string;
```

## Paramètres

- `paths` : Les segments à résoudre.
- `origin` : Le chemin de départ.

## Valeur de retour

Un chemin normalisé, résolu en partant de l'origine.

## Voir aussi

- [`join`](/fr/v1/api/common/path/join) - Joint des segments et normalise le résultat
- [`normalize`](/fr/v1/api/common/path/normalize) - Normalise un chemin
