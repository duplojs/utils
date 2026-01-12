---
outline: [2, 3]
description: "Un repository constitue une couche d'abstraction entre l'application et l'infrastructure. Il encapsule les opérations métier sur les données en masquant les détails techniques, permettant ainsi à la couche application de manipuler les données métier sans se préoccuper de leur implémentation technique."
prev:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
next:
  text: "UseCase"
  link: "/fr/v1/api/clean/useCase"
---

# Repository

Un `repository` constitue une couche d'abstraction entre l'application et l'infrastructure. Il encapsule les opérations métier sur les données en masquant les détails techniques, permettant ainsi à la couche application de manipuler les données métier sans se préoccuper de leur implémentation technique.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/repository/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
  :foldLines="[3, 28]"
/>

## Fonctionnement

`C.createRepository<GenericRepository>()` retourne un **handler de repository**.
Son objectif est simple : vous forcer à fournir une implémentation qui respecte exactement le contrat `GenericRepository` (paramètres, retours, async, etc.).

::: info
Ce helper est volontairement minimal : il ne fournit pas de logique runtime. Sa valeur est dans le typage et la composition avec [useCase](/fr/v1/api/clean/useCase).
:::

## Déclarer un contrat

Le contrat d'un repository est généralement une interface de l'application layer (ex: `findById`, `save`, ...).

Une fois le handler créé, vous pouvez le passer comme dépendance à `C.createUseCase(...)` et instancier le use case avec une implémentation réelle (infrastructure layer).

## Méthodes et Propriétés

Un `RepositoryHandler<GenericRepository>` expose :

### Méthodes

#### `createImplementation()`

Retourne l'implémentation fournie, en s'assurant qu'elle respecte le contrat.

```typescript
function createImplementation(
	implementation: GenericRepository
): GenericRepository
```

## Voir aussi

- [`useCase`](/fr/v1/api/clean/useCase)
