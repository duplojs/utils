---
outline: [2, 3]
prev:
  text: "createUseCase"
  link: "/v1/api/clean/createUseCase/fr"
next:
  text: "createFlag"
  link: "/v1/api/clean/createFlag/fr"
---

# useCaseInstances

`useCaseInstances(useCases, repositories)` instancie plusieurs use cases d'un coup et retourne un objet contenant leurs fonctions finales, typées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/useCaseInstances/examples/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
/>

## Syntaxe

```typescript
function useCaseInstances(
	useCases: Record<string, UseCaseHandler>,
	repositories: object
): object
```

## Paramètres

- `useCases` : objet de `UseCaseHandler`.
- `repositories` : objet contenant toutes les implémentations de repositories requises.

## Valeur de retour

Un objet qui mappe chaque clé de `useCases` vers la fonction instanciée du use case.

## Voir aussi

- [`createUseCase`](/v1/api/clean/createUseCase/fr)
