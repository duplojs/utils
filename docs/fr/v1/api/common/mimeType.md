---
outline: [2, 3]
description: "L'objet mimeType associe des extensions de fichiers (sans point) aux types MIME via get et set."
prev:
  text: "toRegExp"
  link: "/fr/v1/api/common/toRegExp"
next:
  text: "interpolation"
  link: "/fr/v1/api/common/interpolation"
---

# mimeType

L'objet **`mimeType`** associe des extensions de fichiers (sans point) aux types MIME via deux methodes: `get` et `set`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/mimeType/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
export interface MimeTypeStore {
    get(extensionName: string): string | undefined;
    set(extensionName: string, mimeType: string): void;
}

const mimeType: MimeTypeStore;
```

## Paramètres

- Aucun.

## Valeur de retour

`mimeType` est un objet de type `MimeTypeStore`.

- `mimeType.get(extensionName)` retourne le type MIME associe, ou `undefined` si l'extension est inconnue.
- `mimeType.set(extensionName, mimeType)` ajoute ou met a jour le type MIME associe a une extension.

## Voir aussi

- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
