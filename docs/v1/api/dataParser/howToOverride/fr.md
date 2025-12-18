---
outline: [2, 3]
prev:
  text: "coerce.*"
  link: "/v1/api/dataParser/coerce/fr"
next:
  text: "DataParser"
  link: "/v1/api/dataParser/fr"
---

# Comment override les méthodes du DataParser ?

Le `DataParser` expose un système d'override qui permet d'ajouter ou de remplacer des méthodes d'instance ou des propriétés sans forker la librairie.

## Exemple d'implementation

<MonacoTSEditor
  src="/v1/api/dataParser/howToOverride/examples/plugin.doc.ts"
  majorVersion="v1"
  height="750px"
/>

## Étapes

1. **Étendre l'interface `DataParser`** via `declare module` pour que TypeScript connaisse votre API (`parseOrThrow` dans l'exemple).
2. **Définir la méthode** avec `dataParserInit.overrideHandler.setMethod(...)` en réutilisant les méthodes existantes (`parser.parse`, `parser.asyncParse`, etc.).
3. **Utiliser le plugin** : une fois la méthode enregistrée, tous vos parsers (`DP.*`, `DPE.*`) la partagent au runtime.

## Voir aussi

- [`Recover`](/v1/api/dataParser/recover/fr) – Pour intercepter les erreurs côté utilisateur sans override global.
