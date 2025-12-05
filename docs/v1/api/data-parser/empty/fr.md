---
outline: [2, 3]
prev:
  text: "nil"
  link: "/v1/api/data-parser/nil/fr"
next:
  text: "unknown"
  link: "/v1/api/data-parser/unknown/fr"
---

# empty

`DDataParser.empty()` valide uniquement `undefined`. C'est la brique de base pour exprimer des champs volontairement absents ou pour combiner avec `optional`/`nullable`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/empty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas `undefined`.
- `checkers` : `checkerRefine` pour ajouter des contraintes.
- `coerce` : `true` pour convertir certaines valeurs falsy en `undefined`. Par défaut `false`.

## Valeur de retour

Un `DataParserEmpty`. `parse` renvoie `DEither.success<undefined>` ou `DEither.error<DataParserError>`.

## Voir aussi

- [`date`](/v1/api/data-parser/date/fr) - Parser pour les dates
- [`coerce.*`](/v1/api/data-parser/coerce/fr) - Fonctions de coercition pour divers types