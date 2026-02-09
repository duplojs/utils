---
outline: [2, 3]
description: "La map mimeType associe des extensions de fichiers (sans point) aux types MIME."
prev:
  text: "toRegExp"
  link: "/fr/v1/api/common/toRegExp"
next:
  text: "interpolation"
  link: "/fr/v1/api/common/interpolation"
---

# mimeType

La map **`mimeType`** associe des extensions de fichiers (sans point) aux types MIME.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/mimeType/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
const mimeType: Map<string, string>;
```

## Paramètres

- Aucun.

## Valeur de retour

Une `Map` dont la clé est une extension (sans point) et la valeur le type MIME.
Si l'extension est inconnue, `mimeType.get(...)` renvoie `undefined`.

## Voir aussi

- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
