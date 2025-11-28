---
outline: [2, 3]
prev:
  text: "recover"
  link: "/v1/api/data-parser/recover/fr"
next:
  text: "Data Parser"
  link: "/v1/api/data-parser/fr"
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
  src="/v1/api/data-parser/coerce/examples/overview.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Import direct `DPC`

Besoin d'un import tree-shakable ? Utilisez le namespace `DPC` depuis `@duplojs/utils/dataParserCoerce` (ou via `import { DDataParserCoerce } from "@duplojs/utils"`).

<MonacoTSEditor
  src="/v1/api/data-parser/coerce/examples/dpc.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Voir aussi

- [`object`](/v1/api/data-parser/object/fr) - Parser pour les objets
- [`bigint`](/v1/api/data-parser/bigint/fr) - Parser pour les entiers bigint