---
outline: [2, 3]
description: "La fonction fix() nettoie un chemin POSIX en retirant un slash final et le prefixe ./ en tete."
prev:
  text: "isAbsolute"
  link: "/fr/v1/api/common/path/isAbsolute"
next:
  text: "resolveRelative"
  link: "/fr/v1/api/common/path/resolveRelative"
---

# fix

La fonction **`fix()`** nettoie un chemin POSIX en retirant un slash final et le prefixe `./` en tete.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/fix/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function fix(
	path: string
): string;
```

## Parametres

- `path` : Le chemin a nettoyer.

## Valeur de retour

Le chemin sans slash final et sans prefixe `./` en tete. Si le chemin est `/`, le resultat est une chaine vide.

## Voir aussi

- [`resolveRelative`](/fr/v1/api/common/path/resolveRelative) - Resout plusieurs segments en un seul chemin
- [`isAbsolute`](/fr/v1/api/common/path/isAbsolute) - Verifie si un chemin est absolu
