---
outline: [2, 3]
prev:
  text: "nil"
  link: "/fr/v1/api/dataParser/nil"
next:
  text: "unknown"
  link: "/fr/v1/api/dataParser/unknown"
---

# empty

`DDataParser.empty()` valide uniquement `undefined`. C'est la brique de base pour exprimer des champs volontairement absents ou pour combiner avec `optional`/`nullable`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/empty/tryout.doc.ts"
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

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types