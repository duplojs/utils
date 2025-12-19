---
outline: [2, 3]
prev:
  text: "transform"
  link: "/fr/v1/api/dataParser/transform"
next:
  text: "recover"
  link: "/fr/v1/api/dataParser/recover"
---

# refine

`DDataParser.checkerRefine(predicate, options?)` crée un checker personnalisé. Il s'intègre partout (`schema.addChecker`, option `checkers`, API `extended.refine`) et réutilise le moteur d'erreurs (`path`, message, valeur rejetée).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/refine/tryout.doc.ts"
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
  src="/examples/v1/api/dataParser/refine/object.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Voir aussi

- [`string`](/fr/v1/api/dataParser/string) - Parser pour les chaînes de caractères
- [`literal`](/fr/v1/api/dataParser/literal) - Parser pour les valeurs littérales
