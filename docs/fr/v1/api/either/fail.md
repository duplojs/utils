---
outline: [2, 3]
description: "Retourne un EitherLeft<\"fail\", never> : parfait pour signaler un échec sans transporter de données supplémentaires."
prev:
  text: "error"
  link: "/fr/v1/api/either/error"
next:
  text: "isRight"
  link: "/fr/v1/api/either/isRight"
---

# fail

Retourne un `EitherLeft<"fail", never>` : parfait pour signaler un échec sans transporter de données supplémentaires.

::: tip
`fail` est l'alias sans payload de `left("fail")`. Pour les détails sur la personnalisation de l'information ou l'ajout d'une valeur, lisez la page [`left`](/fr/v1/api/either/left).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/fail/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntaxe

```typescript
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

- [`error`](/fr/v1/api/either/error) – Variante avec payload.
- [`ok`](/fr/v1/api/either/ok) – Pendant côté `Right` sans payload.
- [`left`](/fr/v1/api/either/left) – Pour construire vos propres erreurs contextualisées.
