---
outline: [2, 3]
description: "Un useCase est une fonction de la couche application qui matérialise une demande métier. Chaque useCase correspond à une action métier spécifique et contient la logique nécessaire à son exécution."
prev:
  text: "Port"
  link: "/fr/v1/api/clean/port"
next:
  text: "chainedFunction"
  link: "/fr/v1/api/clean/chainedFunction"
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

- **la déclaration** du use case : ses dépendances (ports et/ou autres use cases) + la factory qui construit la fonction finale
- **l'instanciation** du use case : fournir les implémentations concrètes des ports (infrastructure) pour obtenir la fonction exécutable

Un `UseCase` peut dépendre d'un autre `UseCaseHandler`. Dans ce cas, l'instanciation est gérée automatiquement : `getUseCase(...)` résout les sous-use-cases à partir du même objet `ports`.

::: info
Dans ce contexte, un `repository` est simplement un alias sémantique de `port` via `createRepository`.
:::

## Créer un `UseCase`

Créer un use case, c'est définir :

- ses dépendances (ports et/ou use cases)
- une factory qui reçoit ces dépendances **instanciées** et retourne la fonction du use case

## Instancier un `UseCase`

Pour obtenir la fonction exécutable, appelez :
- `useCaseHandler.getUseCase({ ...ports })`

Ce pattern facilite l'injection, le test, et permet de garder la couche application indépendante des détails d'infrastructure.

## Instancier plusieurs `UseCase` (`C.useCaseInstances`)

Quand vous avez plusieurs use cases à instancier, `C.useCaseInstances(...)` évite de répéter `getUseCase(...)` partout.

Il prend :
- un objet `{ key: useCaseHandler }`
- un objet `{ key: portImplementation }`

Et retourne :
- un objet `{ key: useCaseFunction }` (mêmes clés que l'objet de départ)

`useCaseInstances` supporte aussi les dépendances de type `UseCaseHandler` : les sous-use-cases sont instanciés automatiquement à partir du même objet de ports.

## Méthodes et Propriétés

Un `UseCaseHandler` expose :

### Méthodes

#### `getUseCase()`

Instancie la fonction du use case à partir des implémentations de ports.

```typescript
function getUseCase(
	ports: Ports
): UseCase
```

### Propriétés

#### `dependencies`

La définition des dépendances (handlers de ports et/ou de use cases).

## Voir aussi

- [`repository`](/fr/v1/api/clean/repository)
- [`port`](/fr/v1/api/clean/port)
