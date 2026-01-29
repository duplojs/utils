---
outline: [2, 3]
prev:
  text: "date"
  link: "/fr/v1/api/dataParser/date"
next:
  text: "literal"
  link: "/fr/v1/api/dataParser/literal"
---

# time

Valide des durées au format `TheTime`. `DDataParser.time()` accepte un `TheTime` (ou un `number` sûr en millisecondes), applique vos checkers (`min`, `max`, `refine`, etc.).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas un `TheTime`.
- `checkers` : `checkerTimeMin`, `checkerTimeMax`, `checkerRefine`, etc.
- `coerce` : `true` pour accepter une string ISO (`HH:MM[:SS[.mmm]]`) avant conversion en `TheTime`. Par défaut `false`.

## Valeur de retour

Un `DataParserTime` avec `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. Le `parse` renvoie `DEither.success<TheTime>` si tout passe ou `DEither.error<DataParserError>` avec les issues accumulées.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/checkers.doc.ts"
  majorVersion="v1"
  height="400px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/extended.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types
