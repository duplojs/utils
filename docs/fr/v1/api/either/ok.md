---
outline: [2, 3]
description: "Retourne un Right<\"ok\", void> : un succès vide qui sert à confirmer qu'une opération s'est bien déroulée sans donnée supplémentaire."
prev:
  text: "success"
  link: "/fr/v1/api/either/success"
next:
  text: "left"
  link: "/fr/v1/api/either/left"
---

# ok

Retourne un `Right<"ok", void>` : un succès vide qui sert à confirmer qu'une opération s'est bien déroulée sans donnée supplémentaire.

::: tip
`ok` n'est qu'un alias spécialisé de `right("ok")`. Pour mieux comprendre la construction des `Right` (information obligatoire, unwrap, helpers), référez-vous à la page [`right`](/fr/v1/api/either/right).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/ok/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntaxe

```typescript
function ok(): Ok
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

- [`success`](/fr/v1/api/either/success) – Quand vous avez une valeur à exposer.
- [`right`](/fr/v1/api/either/right) – Pour choisir une information personnalisée.
- [`fail`](/fr/v1/api/either/fail) – Pendant côté `Left` pour signaler un échec sans payload.
