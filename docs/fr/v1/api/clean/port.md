---
outline: [2, 3]
description: "Un port est un contrat d'abstraction entre la couche application et les systèmes externes. Il définit les capacités requises par les use cases en gardant les détails d'infrastructure hors du code métier."
prev:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
next:
  text: "UseCase"
  link: "/fr/v1/api/clean/useCase"
---

# Port

Un `port` est un contrat d'abstraction entre la couche application et les systèmes externes. Il définit les capacités requises par les use cases en gardant les détails d'infrastructure hors du code métier.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/port/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
  :foldLines="[3, 28]"
/>

## Fonctionnement

`C.createPort<GenericPort>()` retourne un **handler de port**.
Son objectif est simple : vous forcer à fournir une implémentation qui respecte exactement le contrat `GenericPort` (paramètres, retours, async, etc.).

::: info
Ce helper est volontairement minimal : il ne fournit pas de logique runtime. Sa valeur est dans le typage et la composition avec [useCase](/fr/v1/api/clean/useCase).
:::

## Déclarer un contrat

Le contrat d'un port est généralement une interface de l'application layer (ex: `send`, `notify`, `publish`, ...).

Une fois le handler créé, vous pouvez le passer comme dépendance à `C.createUseCase(...)` et instancier le use case avec une implémentation réelle (infrastructure layer).

## Méthodes et Propriétés

Un `PortHandler<GenericPort>` expose :

### Méthodes

#### `createImplementation()`

Retourne l'implémentation fournie, en s'assurant qu'elle respecte le contrat.

```typescript
function createImplementation(
	implementation: GenericPort
): GenericPort
```

## Voir aussi

- [`repository`](/fr/v1/api/clean/repository)
- [`useCase`](/fr/v1/api/clean/useCase)
