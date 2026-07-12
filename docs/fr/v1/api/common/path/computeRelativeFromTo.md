---
outline: [2, 3]
description: "La fonction computeRelativeFromTo() calcule le chemin relatif entre deux chemins POSIX absolus."
prev:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
next:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
---

# computeRelativeFromTo

La fonction **`computeRelativeFromTo()`** calcule le chemin relatif entre deux chemins POSIX absolus.
Elle retourne `null` si l'un des chemins n'est pas absolu.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/computeRelativeFromTo/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function computeRelativeFromTo<
	GenericSourcePath extends string,
	GenericDestinationPath extends string,
>(
	source: GenericSourcePath,
	destination: GenericDestinationPath,
): string | null;
```

## Paramètres

- `source` : Le chemin absolu de départ.
- `destination` : Le chemin absolu à atteindre.

## Valeur de retour

Le chemin relatif de `source` vers `destination`, `.` si les deux chemins sont identiques, ou `null` si un chemin n'est pas absolu.

## Voir aussi

- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Résout une liste de segments depuis une origine
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent d'un chemin
