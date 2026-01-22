---
outline: [2, 3]
description: "La fonction isAbsolute() vérifie si un chemin POSIX est absolu et ne remonte pas au-dessus de la racine."
prev:
  text: "Path"
  link: "/fr/v1/api/common/path/"
next:
  text: "resolveRelative"
  link: "/fr/v1/api/common/path/resolveRelative"
---

# isAbsolute

La fonction **`isAbsolute()`** vérifie si un chemin est absolu et ne remonte pas au-dessus de la racine.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/isAbsolute/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function isAbsolute(
	path: string
): boolean;
```

## Paramètres

- `path` : Le chemin à tester.

## Valeur de retour

Un booléen indiquant si le chemin est absolu.

## Voir aussi

- [`resolveFrom`](/fr/v1/api/common/path/resolveFrom) - Résout une liste de segments à partir d'une origine
