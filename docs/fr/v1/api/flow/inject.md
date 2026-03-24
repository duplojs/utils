---
outline: [2, 3]
description: "Demande une dépendance au runner de flow."
prev:
  text: "createDependence"
  link: "/fr/v1/api/flow/createDependence"
next:
  text: "step"
  link: "/fr/v1/api/flow/step"
---

# inject

La fonction **`inject()`** déclare qu'un flow a besoin d'une dépendance. La valeur réelle est fournie par `F.run()` ou `F.exec()` via le paramètre `dependencies`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/inject/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function inject<
	GenericDependenceHandler extends DependenceHandler
>(
	dependenceHandler: GenericDependenceHandler
): Generator<
	Injection<GenericDependenceHandler>,
	ReturnType<GenericDependenceHandler>
>
```

## Paramètres

- `dependenceHandler` : Descripteur de dépendance créé avec `F.createDependence()`.

## Valeur de retour

Un générateur qui émet un effet d'injection. Une fois que le runner injecte la dépendance correspondante, le générateur retourne la valeur injectée.

## Voir aussi

- [`run`](/fr/v1/api/flow/run) - Fournit les dépendances au flow
- [`exec`](/fr/v1/api/flow/exec) - Peut override les dépendances pour des flows imbriqués
