---
outline: [2, 3]
description: "DDataParser.time() valide des durées TheTime, accepte TheTime/SerializedTheTime/number sûr, et peut coercer des chaînes ISO de durée."
prev:
  text: "date"
  link: "/fr/v1/api/dataParser/date"
next:
  text: "literal"
  link: "/fr/v1/api/dataParser/literal"
---

# time

`DDataParser.time()` valide des durées `TheTime`. Le parser accepte nativement `TheTime`, `SerializedTheTime` et les valeurs numériques sûres. En mode coercitif (`coerce: true`), il accepte aussi les chaînes de temps ISO-like (`HH:MM[:SS[.mmm]]`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Paramètres

- `errorMessage` : message personnalisé quand l'entrée n'est pas convertible en `TheTime`.
- `checkers` : `checkerTimeMin`, `checkerTimeMax`, `checkerRefine`, etc.
- `coerce` : `true` pour accepter un nombre (ms) ou une string ISO (`HH:MM[:SS[.mmm]]`) avant conversion en `TheTime`. Par défaut `false`.

## Valeur de retour

Un `DataParserTime` avec `parse`, `asyncParse`, `exec`, `asyncExec`, `addChecker`, `clone`. Le `parse` renvoie `DEither.success<TheTime>` si tout passe ou `DEither.error<DataParserError>` avec les issues accumulées.

En mode étendu (`DPE.time()`), les méthodes `.min(...)` et `.max(...)` ajoutent respectivement les checkers `checkerTimeMin` et `checkerTimeMax`.

## Autres exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/checkers.doc.ts"
  majorVersion="v1"
  height="500px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/time/extended.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`date`](/fr/v1/api/dataParser/date) - Parser pour les dates
- [`coerce.*`](/fr/v1/api/dataParser/coerce) - Fonctions de coercition pour divers types
