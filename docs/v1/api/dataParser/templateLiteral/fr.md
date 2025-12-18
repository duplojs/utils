---
outline: [2, 3]
prev:
  text: "literal"
  link: "/v1/api/dataParser/literal/fr"
next:
  text: "nil"
  link: "/v1/api/dataParser/nil/fr"
---

# templateLiteral

Construit un parser pour une forme de chaîne déterministe (`"order-${number}"`, `"user-${string}-${number}"`, etc.). `DDataParser.templateLiteral()` prend un tableau mêlant parties primitives et sous-parsers (`string`, `number`, `literal`, ...) et retourne un parser `string` fortement typé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/templateLiteral/examples/tryout.doc.ts"
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
  src="/v1/api/dataParser/templateLiteral/examples/checkers.doc.ts"
  majorVersion="v1"
  height="450px"
/>

### Mode étendu

<MonacoTSEditor
  src="/v1/api/dataParser/templateLiteral/examples/extended.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Voir aussi

- [`bigint`](/v1/api/dataParser/bigint/fr) - Parser pour les grands entiers
- [`boolean`](/v1/api/dataParser/boolean/fr) - Parser pour les valeurs booléennes