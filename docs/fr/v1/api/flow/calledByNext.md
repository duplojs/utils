---
outline: [2, 3]
description: "Enregistre un callback exécuté quand le même flow est rappelé avant la fin de l'exécution précédente."
prev:
  text: "exec"
  link: "/fr/v1/api/flow/exec"
next:
  text: "queue"
  link: "/fr/v1/api/flow/queue"
---

# calledByNext

La fonction **`calledByNext()`** enregistre un callback exécuté quand une nouvelle exécution du même flow remplace une exécution asynchrone encore active. Un cas d'usage classique consiste à annuler un `fetch` précédent avec `AbortController`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/calledByNext/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

```typescript
function calledByNext<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): AsyncGenerator
```

## Paramètres

- `theFunction` : Callback appelé quand une exécution suivante du même flow arrive avant la fin de l'exécution courante.

## Valeur de retour

Un générateur asynchrone qui émet un effet `calledByNext`. La valeur retournée par le callback n'est pas retournée par le flow.

## Remarques

- L'état interne est stocké dans une `WeakMap` dont la clé est la référence du flow exécuté.
- Pour partager ce comportement entre plusieurs appels, réutilisez le même flow créé avec `F.create(...)` ou la même fonction obtenue avec `F.toFunction(...)`.
- Un `F.run(async function *() { ... })` déclaré inline crée une nouvelle référence à chaque appel et ne partage donc pas l'état de `calledByNext()`.

## Voir aussi

- [`queue`](/fr/v1/api/flow/queue) - Sérialise ou limite les exécutions concurrentes d'un même flow
- [`throttling`](/fr/v1/api/flow/throttling) - Ignore ou reporte les appels trop rapprochés
- [`exec`](/fr/v1/api/flow/exec) - Exécute un flow imbriqué dans le flow courant
