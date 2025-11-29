---
outline: [2, 3]
prev:
  text: "error"
  link: "/v1/api/either/error/fr"
next:
  text: "isRight"
  link: "/v1/api/either/isRight/fr"
---

# fail

Retourne un `EitherLeft<"fail", never>` : parfait pour signaler un échec sans transporter de données supplémentaires.

::: tip
`fail` est l'alias sans payload de `left("fail")`. Pour les détails sur la personnalisation de l'information ou l'ajout d'une valeur, lisez la page [`left`](/v1/api/either/left/fr).
:::

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/fail/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

```ts
function fail(): EitherFail
```

## Paramètres

Aucun : l'appel représente uniquement le fait qu'une opération n'a pas abouti.

## Valeur de retour

Un `Left` taggé `"fail"` dont la valeur wrappée est `never`. Combinez-le avec `E.whenHasInformation(result, "fail", handler)` pour exécuter une logique spécifique quand aucune donnée n'est disponible.

## Cas d'usage

- Une commande qui échoue mais ne dispose pas de détail utile à transmettre.
- Un garde-fou qui garantit qu'une branche retourne toujours un `Left` même sans contexte.
- Simplifier les tests en vérifiant uniquement l'information `"fail"`.

## Voir aussi

- [`error`](/v1/api/either/error/fr) – Variante avec payload.
- [`ok`](/v1/api/either/ok/fr) – Pendant côté `Right` sans payload.
- [`left`](/v1/api/either/left/fr) – Pour construire vos propres erreurs contextualisées.
