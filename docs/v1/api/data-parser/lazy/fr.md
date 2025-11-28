---
outline: [2, 3]
prev:
  text: "nullable"
  link: "/v1/api/data-parser/nullable/fr"
next:
  text: "transform"
  link: "/v1/api/data-parser/transform/fr"
---

# lazy

`DDataParser.lazy(() => parser)` permet de décrire des structures récursives (arbres, catégories, menus, etc.) en différant la résolution du parser. Le getter n'est évalué qu'au moment de l'exécution, ce qui évite les références circulaires.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/data-parser/lazy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="520px"
/>

## Paramètres

- `getter` : fonction qui retourne le parser réel (souvent un `object` contenant à son tour le `lazy`).
- `checkers` : `checkerRefine` appliqués sur la structure complète (ex: limiter la profondeur, vérifier les invariants globaux).
- `errorMessage` : message personnalisé si l'entrée ne correspond pas au schéma résolu.

## Valeur de retour

Un `DataParserLazy`. `schema.parse(data)` renvoie `DEither.success<Output>` lorsque la valeur satisfait le parser résolu, sinon un `DEither.error<DataParserError>` avec le chemin exact même en cas de récursion.

## Others exemples

### Mode étendu

<MonacoTSEditor
  src="/v1/api/data-parser/lazy/examples/extended.doc.ts"
  majorVersion="v1"
  height="560px"
/>

## Voir aussi

- [`object`](/v1/api/data-parser/object/fr) - Parser pour les objets
- [`bigint`](/v1/api/data-parser/bigint/fr) - Parser pour les entiers bigint