---
outline: [2, 3]
description: "La fonction resolveFrom() résout une liste de segments à partir d'une origine et retourne un chemin absolu ou null."
prev:
  text: "resolveRelative"
  link: "/fr/v1/api/common/path/resolveRelative"
next:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
---

# resolveFrom

La fonction **`resolveFrom()`** résout une liste de segments à partir d'une origine et retourne un chemin absolu ou `null`.
Elle résout les segments dans l'ordre via `resolveRelative` puis valide que le chemin final est absolu.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/resolveFrom/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function resolveFrom<
    GenericSegment extends string,
>(
    origin: string,
    segments: AnyTuple<GenericSegment>,
    params?: {
        stayInOrigin?: boolean;
    },
): string | null;
```

## Paramètres

- `origin` : Le chemin de départ.
- `segments` : Tableau des segments à résoudre.
- `params.stayInOrigin` : Quand `true`, retourne `null` si les segments sortent de l'origine.

## Valeur de retour

Le chemin absolu résolu, ou `null` si le résultat n'est pas absolu (ou si `stayInOrigin` bloque la traversée).

## Voir aussi

- [`resolveRelative`](/fr/v1/api/common/path/resolveRelative) - Résout plusieurs segments en un seul chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent d'un chemin
