---
outline: [2, 3]
prev:
  text: "tuple"
  link: "/v1/api/data-parser/tuple/fr"
next:
  text: "union"
  link: "/v1/api/data-parser/union/fr"
---

# record

`DDataParser.record(keyParser, valueParser)` valide des dictionnaires dynamiques en vérifiant à la fois la forme des clés (string/literal/template literal/number/union) et les valeurs associées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/record/examples/tryout.doc.ts"
  majorVersion="v1"
  height="530px"
/>

## Paramètres

- `key` : parser pour les clés (`DP.string()`, `DP.templateLiteral(...)`, `DP.literal([...])`, etc.).
- `value` : parser appliqué à chaque entrée (`DP.number()`, `DP.object(...)`, ...).
- `checkers` : `checkerRefine` pour exprimer des contraintes globales (clés requises, somme minimale, etc.).
- `errorMessage` : message générique si l'entrée n'est pas un objet indexable.

## Valeur de retour

Un `DataParserRecord`. `schema.parse(data)` renvoie `DEither.success<Record<OutputKey, OutputValue>>` ou `DEither.error<DataParserError>` avec les clés incriminées.

## Voir aussi

- [`object`](/v1/api/data-parser/object/fr) - Parser pour les objets
- [`empty`](/v1/api/data-parser/empty/fr) - Parser pour les valeurs vides
