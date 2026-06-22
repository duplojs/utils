---
outline: [2, 3]
description: "La fonction asyncGroup() agrège les valeurs Right synchrones ou asynchrones d'un objet, d'un tableau ou d'un tuple, ou renvoie le premier Left rencontré."
prev:
  text: "group"
  link: "/fr/v1/api/either/group"
next:
  text: "hasInformation"
  link: "/fr/v1/api/either/hasInformation"
---

# asyncGroup

La fonction **`asyncGroup()`** agrège les valeurs `Right` synchrones ou asynchrones d'un objet, d'un tableau ou d'un tuple dans un `Success`. Elle attend les entrées dans l'ordre et renvoie le premier `Left` rencontré.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

Grâce au paramètre générique `const`, un tableau littéral est automatiquement inféré comme un tuple, sans assertion `as const`.

## Syntaxe

```typescript
await E.asyncGroup(group)
```

## Paramètres

- `group` : objet, tableau ou tuple contenant des `Either`, `Promise`, `Future` ou des fonctions retournant l'un de ces types.

## Valeur de retour

- Une `Promise` d'un `Success` contenant un objet, un tableau ou un tuple de valeurs déballées lorsque toutes les entrées produisent un `Right`.
- Sinon, une `Promise` du premier `Left` dans l'ordre de déclaration. Les fonctions placées après ce `Left` ne sont pas appelées.

## Voir aussi

- [`group`](/fr/v1/api/either/group) - Version synchrone
- [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe) - Pipeline asynchrone sur `Right`
- [`future`](/fr/v1/api/either/future) - Enveloppe asynchrone compatible
