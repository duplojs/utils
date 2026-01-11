---
outline: [2, 3]
description: "Un useCase est une fonction de la couche application qui matérialise une demande métier. Chaque useCase correspond à une action métier spécifique et contient la logique nécessaire à son exécution."
prev:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
next:
  text: "Clean"
  link: "/fr/v1/api/clean/"
---

# UseCase

Un `useCase` est une fonction de la couche application qui matérialise une demande métier. Chaque `useCase` correspond à une action métier spécifique et contient la logique nécessaire à son exécution.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/useCase/tryout.doc.ts"
  majorVersion="v1"
  height="820px"
  :foldLines="[3, 22, 36]"
/>

## Fonctionnement

`C.createUseCase(...)` retourne un **handler de use case**.

L'idée est de séparer deux choses :

- **la déclaration** du use case : ses dépendances (repositories et/ou autres use cases) + la factory qui construit la fonction finale
- **l'instanciation** du use case : fournir les implémentations concrètes des repositories (infrastructure) pour obtenir la fonction exécutable

Un `UseCase` peut dépendre d'un autre `UseCaseHandler`. Dans ce cas, l'instanciation est gérée automatiquement : `getUseCase(...)` résout les sous-use-cases à partir du même objet `repositories`.

## Créer un `UseCase`

Créer un use case, c'est définir :

- ses dépendances (repositories et/ou use cases)
- une factory qui reçoit ces dépendances **instanciées** et retourne la fonction du use case

## Instancier un `UseCase`

Pour obtenir la fonction exécutable, appelez :
- `useCaseHandler.getUseCase({ ...repositories })`

Ce pattern facilite l'injection, le test, et permet de garder la couche application indépendante des détails d'infrastructure.

## Instancier plusieurs `UseCase` (`C.useCaseInstances`)

Quand vous avez plusieurs use cases à instancier, `C.useCaseInstances(...)` évite de répéter `getUseCase(...)` partout.

Il prend :
- un objet `{ key: useCaseHandler }`
- un objet `{ key: repositoryImplementation }`

Et retourne :
- un objet `{ key: useCaseFunction }` (mêmes clés que l'objet de départ)

`useCaseInstances` supporte aussi les dépendances de type `UseCaseHandler` : les sous-use-cases sont instanciés automatiquement à partir du même objet de repositories.

## Méthodes et Propriétés

Un `UseCaseHandler` expose :

### Méthodes

#### `getUseCase()`

Instancie la fonction du use case à partir des implémentations de repositories.

```typescript
function getUseCase(
	repositories: Repositories
): UseCase
```

### Propriétés

#### `dependencies`

La définition des dépendances (handlers de repositories et/ou de use cases).

## Voir aussi

- [`repository`](/fr/v1/api/clean/repository)
