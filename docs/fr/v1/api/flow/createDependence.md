---
outline: [2, 3]
description: "Crée un descripteur de dépendance typé pour le système de flow."
prev:
  text: "finalizer"
  link: "/fr/v1/api/flow/finalizer"
next:
  text: "inject"
  link: "/fr/v1/api/flow/inject"
---

# createDependence

La fonction **`createDependence()`** crée un descripteur de dépendance typé identifié par un nom de chaîne. Ce handler est ensuite utilisé avec `F.inject()` et associé à l'objet `dependencies` transmis à `F.run()` ou `F.exec()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/createDependence/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function createDependence<
	GenericName extends string
>(
	name: GenericName
): DependenceHandlerDefinition<GenericName>
```

## Paramètres

- `name` : Clé de dépendance utilisée pour associer une valeur dans le sac de dépendances du runner.

## Valeur de retour

Une définition de handler de dépendance typée. Une fois spécialisée avec un type, elle peut être utilisée avec `F.inject()` pour récupérer la dépendance correspondante dans un flow.

## Voir aussi

- [`inject`](/fr/v1/api/flow/inject) - Demande une dépendance au runner
- [`run`](/fr/v1/api/flow/run) - Fournit les dépendances au flow
