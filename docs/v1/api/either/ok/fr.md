---
outline: [2, 3]
prev:
  text: "success"
  link: "/v1/api/either/success/fr"
next:
  text: "left"
  link: "/v1/api/either/left/fr"
---

# ok

Retourne un `EitherRight<"ok", never>` : un succès vide qui sert à confirmer qu'une opération s'est bien déroulée sans donnée supplémentaire.

::: tip
`ok` n'est qu'un alias spécialisé de `right("ok")`. Pour mieux comprendre la construction des `Right` (information obligatoire, unwrap, helpers), référez-vous à la page [`right`](/v1/api/either/right/fr).
:::

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/ok/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```ts
function ok(): EitherOk
```

## Paramètres

Aucun. L'appel signale simplement que « tout va bien ».

## Valeur de retour

Un `Right` dont l'information est fixée à `"ok"` et dont la valeur wrappée est `never`. Conçu pour les commandes ou les side-effects qui n'ont rien à renvoyer.

## Cas d'usage

- Valider une action impérative (envoi d'email, mutation, job planifié).
- Harmoniser les retours lorsque certains chemins n'ont rien à retourner mais doivent rester compatibles avec les autres `Either` de votre fonction.
- Travailler avec `E.whenHasInformation(..., "ok", handler)` pour déclencher un callback sans payload.

## Voir aussi

- [`success`](/v1/api/either/success/fr) – Quand vous avez une valeur à exposer.
- [`right`](/v1/api/either/right/fr) – Pour choisir une information personnalisée.
- [`fail`](/v1/api/either/fail/fr) – Pendant côté `Left` pour signaler un échec sans payload.
