---
outline: [2, 3]
description: "DDataParser.record(keyParser, valueParser) valide des dictionnaires dynamiques en vérifiant à la fois la forme des clés (string/literal/template literal/number/union) et les valeurs associées."
prev:
  text: "tuple"
  link: "/fr/v1/api/dataParser/tuple"
next:
  text: "union"
  link: "/fr/v1/api/dataParser/union"
---

# record

`DDataParser.record(keyParser, valueParser)` valide des dictionnaires dynamiques en vérifiant à la fois la forme des clés (string/literal/template literal/number/union) et les valeurs associées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/record/tryout.doc.ts"
  majorVersion="v1"
  height="530px"
/>

## Paramètres

- `key` : parser pour les clés (`DP.string()`, `DP.templateLiteral(...)`, `DP.literal([...])`, etc.).
- `input` : parser appliqué à chaque entrée (`DP.number()`, `DP.object(...)`, ...).
- `checkers` : `checkerRefine` pour exprimer des contraintes globales (clés requises, somme minimale, etc.).
- `errorMessage` : message générique si l'entrée n'est pas un objet indexable.

## Valeur de retour

Un `DataParserRecord`. `schema.parse(data)` renvoie `DEither.success<Record<OutputKey, OutputValue>>` ou `DEither.error<DataParserError>` avec les clés incriminées.

## Voir aussi

- [`object`](/fr/v1/api/dataParser/object) - Parser pour les objets
- [`empty`](/fr/v1/api/dataParser/empty) - Parser pour les valeurs vides
