---
outline: [2, 3]
description: "Un repository constitue une couche d'abstraction entre l'application et l'infrastructure. Il encapsule les opérations métier sur les données en masquant les détails techniques, permettant ainsi à la couche application de manipuler les données métier sans se préoccuper de leur implémentation technique."
prev:
  text: "appendEvidence"
  link: "/fr/v1/api/clean/appendEvidence"
next:
  text: "Port"
  link: "/fr/v1/api/clean/port"
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

`C.createRepository<GenericRepository>()` est un wrapper de `C.createPort<GenericRepository>()`.
C'est uniquement un alias sémantique pour garder le vocabulaire repository dans votre code.

::: info
`createRepository` a exactement le même comportement que `createPort` : même typage, même runtime, même handler retourné.
:::

## Déclarer un contrat

Le contrat d'un repository est généralement une interface de l'application layer (ex: `findById`, `save`, ...). En interne, ce contrat est géré par la même mécanique que les contrats de port.
Selon le contexte, cette déclaration peut aussi être faite côté domaine afin de lier les agrégats au niveau du type avec certains types d'entrées ou de retours des repositories.

Une fois le handler créé, vous pouvez le passer comme dépendance à `C.createUseCase(...)` et instancier le use case avec une implémentation réelle (infrastructure layer).

## Méthodes et Propriétés

Comme `createRepository` délègue à `createPort`, l'API exposée est la même :

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
