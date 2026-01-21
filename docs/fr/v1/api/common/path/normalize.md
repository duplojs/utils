---
outline: [2, 3]
description: "La fonction normalize() normalise un chemin en résolvant les segments et les séparateurs."
prev:
  text: "isUnixPath"
  link: "/fr/v1/api/common/path/isUnixPath"
next:
  text: "join"
  link: "/fr/v1/api/common/path/join"
---

# normalize

La fonction **`normalize()`** normalise un chemin en résolvant les segments et les séparateurs.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/normalize/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function normalize<
	GenericPath extends string
>(
	path: GenericPath
): string;
```

## Paramètres

- `path` : Le chemin à normaliser.

## Valeur de retour

Une chaîne normalisée qui conserve les chemins absolus et les préfixes UNC.

## Voir aussi

- [`join`](/fr/v1/api/common/path/join) - Joint des segments et normalise le résultat
- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Résout une liste de segments
