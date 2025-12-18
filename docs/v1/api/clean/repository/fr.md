---
outline: [2, 3]
prev:
  text: "Flag"
  link: "/v1/api/clean/flag/fr"
next:
  text: "UseCase"
  link: "/v1/api/clean/useCase/fr"
---

# Repository

Un `repository` constitue une couche d'abstraction entre l'application et l'infrastructure. Il encapsule les opérations métier sur les données en masquant les détails techniques, permettant ainsi à la couche application de manipuler les données métier sans se préoccuper de leur implémentation technique.

## Exemple

<MonacoTSEditor
  src="/v1/api/clean/repository/examples/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
  :foldLines="[3, 28]"
/>

## Fonctionnement

`C.createRepository<GenericRepository>()` retourne un **handler de repository**.
Son objectif est simple : vous forcer à fournir une implémentation qui respecte exactement le contrat `GenericRepository` (paramètres, retours, async, etc.).

::: info
Ce helper est volontairement minimal : il ne fournit pas de logique runtime. Sa valeur est dans le typage et la composition avec [useCase](/v1/api/clean/useCase/fr).
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

- [`useCase`](/v1/api/clean/useCase/fr)
