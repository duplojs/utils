---
outline: [2, 3]
description: "Construit un parser pour une forme de chaîne déterministe (\"order-${number}\", \"user-${string}-${number}\", etc.). DDataParser.templateLiteral() prend un tableau mêlant parties primitives et sous-parsers (string, number, literal, ...) et retourne un parser string fortement typé."
prev:
  text: "literal"
  link: "/fr/v1/api/dataParser/literal"
next:
  text: "nil"
  link: "/fr/v1/api/dataParser/nil"
---

# templateLiteral

Construit un parser pour une forme de chaîne déterministe (`"order-${number}"`, `"user-${string}-${number}"`, etc.). `DDataParser.templateLiteral()` prend un tableau mêlant parties primitives et sous-parsers (`string`, `number`, `literal`, ...) et retourne un parser `string` fortement typé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
/>

## Paramètres

- `template` : forme à valider (parties primitives ou sous-parsers compatibles).
- `pattern` : `RegExp` généré automatiquement à partir du template (surcharge rarement nécessaire).
- `checkers` : `checkerRefine` pour appliquer des règles additionnelles.

## Valeur de retour

Un `DataParserTemplateLiteral` qui produit une `string` conforme au template fourni. `parse` → `DEither.success<string>` ou `DEither.error<DataParserError>`.

## Others exemples

### Checkers personnalisés

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/templateLiteral/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`bigint`](/fr/v1/api/dataParser/bigint) - Parser pour les grands entiers
- [`boolean`](/fr/v1/api/dataParser/boolean) - Parser pour les valeurs booléennes