---
outline: [2, 3]
prev:
  text: "transform"
  link: "/v1/api/dataParser/transform/fr"
next:
  text: "recover"
  link: "/v1/api/dataParser/recover/fr"
---

# refine

`DDataParser.checkerRefine(predicate, options?)` crée un checker personnalisé. Il s'intègre partout (`schema.addChecker`, option `checkers`, API `extended.refine`) et réutilise le moteur d'erreurs (`path`, message, valeur rejetée).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/dataParser/refine/examples/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Quand l'utiliser ?

- Valider un motif métier non couvert par les checkers natifs (IBAN, slug, etc.).
- Centraliser une règle réutilisable entre plusieurs schémas (`checkerRefine` est une valeur réutilisable).
- Exprimer des règles sur des structures complexes (objets, tuples...) en s'appuyant sur `addChecker`.

## Exemples supplémentaires

### Valider des coordonnées

<MonacoTSEditor
  src="/v1/api/dataParser/refine/examples/object.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Voir aussi

- [`string`](/v1/api/dataParser/string/fr) - Parser pour les chaînes de caractères
- [`literal`](/v1/api/dataParser/literal/fr) - Parser pour les valeurs littérales
