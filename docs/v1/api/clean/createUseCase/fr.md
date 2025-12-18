---
outline: [2, 3]
prev:
  text: "createRepository"
  link: "/v1/api/clean/createRepository/fr"
next:
  text: "useCaseInstances"
  link: "/v1/api/clean/useCaseInstances/fr"
---

# createUseCase

`createUseCase(dependencies, getUseCase)` déclare un **use case** et liste ses dépendances (repositories ou autres use cases). L'instanciation finale se fait via `useCaseHandler.getUseCase(repositories)`, ce qui facilite l'injection et les tests.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createUseCase/examples/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
/>

## Syntaxe

```typescript
function createUseCase(
	dependencies: Record<string, RepositoryHandler | UseCaseHandler>,
	getUseCase: (dependenciesValue: object) => (input: any) => any
): UseCaseHandler
```

## Paramètres

- `dependencies` : objet de dépendances (repositories ou use cases).
- `getUseCase(dependenciesValue)` : factory qui reçoit les implémentations typées et retourne la fonction du use case.

## Valeur de retour

Un `UseCaseHandler` avec :

- `dependencies` : la définition des dépendances
- `getUseCase(repositories)` : instancie la fonction du use case

## Voir aussi

- [`useCaseInstances`](/v1/api/clean/useCaseInstances/fr)
- [`createRepository`](/v1/api/clean/createRepository/fr)
