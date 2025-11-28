---
outline: [2, 3]
prev:
  text: "lazy"
  link: "/v1/api/data-parser/lazy/fr"
next:
  text: "refine"
  link: "/v1/api/data-parser/refine/fr"
---

# transform

`DDataParser.transform(inner, fn)` applique un parser, puis transforme la valeur validée (synchronement ou asynchronement) avant de la retourner. Idéal pour créer des objets métiers (`URL`, `Date`, DTOs) sans passer par un `pipe` manuel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/transform/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `inner` : parser de départ (string, object, etc.).
- `theFunction(value, error)` : fonction de transformation (peut utiliser `error` pour signaler une erreur personnalisée en retournant `SymbolDataParserError`).
- `checkers` : `checkerRefine` appliqués sur le résultat transformé.
- `errorMessage` : message générique si le pipeline échoue.

## Valeur de retour

Un `DataParserTransform`. `schema.parse(data)` valide l'entrée avec `inner`, exécute `theFunction` et retourne la nouvelle valeur via `DEither.success`. Si l'un des étages échoue, vous recevez `DEither.error<DataParserError>` avec la trace complète.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/transform/examples/extended.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Voir aussi

- [`record`](/v1/api/data-parser/record/fr) - Parser pour les dictionnaires clé/valeur
- [`recover`](/v1/api/data-parser/recover/fr) - Permet de récupérer d'une erreur en fournissant une valeur de secours