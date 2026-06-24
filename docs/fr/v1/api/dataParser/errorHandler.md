---
outline: [2, 3]
description: "DDataParser.errorHandler(inner, transformers) encapsule un parser et réassigne les messages des issues qu'il produit. Il permet de définir les erreurs utilisateur après la déclaration du schéma."
prev:
  text: "recover"
  link: "/fr/v1/api/dataParser/recover"
next:
  text: "isAsynchronous"
  link: "/fr/v1/api/dataParser/isAsynchronous"
---

# errorHandler

`DDataParser.errorHandler(inner, transformers)` encapsule un parser et réassigne les messages des issues qu'il produit. Il permet de définir les erreurs utilisateur après la déclaration du schéma.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/dataParser/errorHandler/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

```ts
DDataParser.errorHandler(inner, transformers, definition?)
DDataParserExtended.errorHandler(inner, transformers, definition?)
dataParser.errorHandler(transformers, definition?)
```

## Paramètres

- `inner` : parser à exécuter avant de réécrire les messages.
- `transformers` : un transformer ou un tableau de transformers. Un transformer reçoit la source de l'issue et retourne un message de remplacement ou `null`.
- `definition.checkers` : appliqués sur la valeur parsée finale après la réécriture des messages. Les issues produites par ces checkers ne sont pas réécrites par cet error handler.
- `definition.errorMessage` : message générique pour les issues produites par l'error handler lui-même.

## Valeur de retour

Un `DataParserErrorHandler`. `schema.parse(data)` renvoie le même état de succès ou d'erreur que `inner`, mais chaque issue produite peut recevoir un nouveau `message` selon son parser ou checker source.

Les checkers ajoutés directement sur le `DataParserErrorHandler` retourné s'exécutent après la réécriture des issues du parser interne. S'ils échouent, leurs messages conservent leur propre `errorMessage` ou le `definition.errorMessage` du handler.

## Autres exemples

### Mode étendu

<MonacoTSEditor
  src="/examples/v1/api/dataParser/errorHandler/extended.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Voir aussi

- [`recover`](/fr/v1/api/dataParser/recover) - Retourne une valeur de repli quand un parser échoue
- [`refine`](/fr/v1/api/dataParser/refine) - Ajoute des règles de validation personnalisées avec messages
