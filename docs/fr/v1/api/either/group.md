---
outline: [2, 3]
description: "La fonction group() agrège les valeurs Right d'un objet, d'un tableau ou d'un tuple dans un Success, ou renvoie le premier Left rencontré."
prev:
  text: "rightAsyncPipe"
  link: "/fr/v1/api/either/rightAsyncPipe"
next:
  text: "asyncGroup"
  link: "/fr/v1/api/either/asyncGroup"
---

# group

La fonction **`group()`** agrège les valeurs `Right` d'un objet, d'un tableau ou d'un tuple dans un `Success`. Si une valeur est un `Left`, elle renvoie le premier rencontré dans l'ordre de déclaration.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/group/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

Grâce au paramètre générique `const`, un tableau littéral est automatiquement inféré comme un tuple, sans assertion `as const`.

## Syntaxe

```typescript
E.group(group)
```

## Paramètres

- `group` : objet, tableau ou tuple contenant des `Either` ou des fonctions retournant un `Either`.

## Valeur de retour

- Un `Success` contenant un objet, un tableau ou un tuple de valeurs déballées lorsque toutes les entrées sont des `Right`.
- Sinon, le premier `Left` dans l'ordre de déclaration. Les fonctions placées après ce `Left` ne sont pas appelées.

## Voir aussi

- [`asyncGroup`](/fr/v1/api/either/asyncGroup) - Version asynchrone acceptant des promesses ou `Future`
- [`rightPipe`](/fr/v1/api/either/rightPipe) - Pipeline synchrone sur `Right`
- [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe) - Pipeline asynchrone sur `Right`
