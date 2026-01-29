---
outline: [2, 3]
description: "La famille DP.coerce.* applique une normalisation avant de lancer les checkers classiques. Elle est idéale pour accepter des payloads bruts (form-data, URLSearchParams, JSON partiel) tout en garantissant un type fort en sortie."
prev:
  text: "isAsynchronous"
  link: "/fr/v1/api/dataParser/isAsynchronous"
next:
  text: "override DataParser"
  link: "/fr/v1/api/dataParser/howToOverride"
---

# coerce.*

La famille `DP.coerce.*` applique une normalisation avant de lancer les checkers classiques. Elle est idéale pour accepter des payloads bruts (form-data, URLSearchParams, JSON partiel) tout en garantissant un type fort en sortie.

## Fonctions disponibles

- `DP.coerce.string()`: convertit en chaîne de caractères.
- `DP.coerce.number()`: convertit en nombre (`"42"`).
- `DP.coerce.bigint()`
- `DP.coerce.boolean()` : interprète `"true"`, `"false"`, `1`, `0`, `on`, `off`, etc.
- `DP.coerce.date()` : accepte `Date`, timestamp ou ISO string et renvoie un `TheDate`.
- `DP.coerce.nil()` : convertit `undefined`/`"null"` vers `null`.
- `DP.coerce.empty()` : convertit `null`/`""` vers `undefined`.

## Exemple global

<MonacoTSEditor
  src="/examples/v1/api/dataParser/coerce/overview.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Import direct `DPC`

Besoin d'un import tree-shakable ? Utilisez le namespace `DPC` depuis `@duplojs/utils/dataParserCoerce` (ou via `import { DDataParserCoerce } from "@duplojs/utils"`).

<MonacoTSEditor
  src="/examples/v1/api/dataParser/coerce/dpc.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Voir aussi

- [`object`](/fr/v1/api/dataParser/object) - Parser pour les objets
- [`bigint`](/fr/v1/api/dataParser/bigint) - Parser pour les entiers bigint
