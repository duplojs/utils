---
outline: [2, 3]
prev:
  text: "constraints"
  link: "/v1/api/clean/constraints/fr"
next:
  text: "createUseCase"
  link: "/v1/api/clean/createUseCase/fr"
---

# createRepository

`createRepository()` déclare un **contrat de repository** (typage uniquement) et fournit `createImplementation()` pour s'assurer que l'implémentation respecte exactement ce contrat (paramètres, retours, async, etc.).

::: info
Ce helper est volontairement minimal : il ne fournit pas de logique runtime. Sa valeur est dans le typage et la composition avec `createUseCase`.
:::

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createRepository/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

```typescript
function createRepository<
	GenericRepository extends object
>(): RepositoryHandler<GenericRepository>
```

## Paramètres

Aucun.

## Valeur de retour

Un `RepositoryHandler<GenericRepository>` avec `createImplementation(implementation)` qui retourne `implementation` en s'assurant qu'il est compatible avec `GenericRepository`.

## Voir aussi

- [`createUseCase`](/v1/api/clean/createUseCase/fr)
