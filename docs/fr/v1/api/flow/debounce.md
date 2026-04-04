---
outline: [2, 3]
description: "Retarde l'exécution d'un flow et annule l'appel précédent si un nouveau arrive avant la fin du délai."
prev:
  text: "throttling"
  link: "/fr/v1/api/flow/throttling"
next:
  text: "breakIf"
  link: "/fr/v1/api/flow/breakIf"
---

# debounce

La fonction **`debounce()`** retarde l'exécution d'un flow. Si un nouvel appel du même flow arrive avant la fin du délai, l'appel précédent est annulé et retourne `params.returnValue`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/debounce/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntaxe

```typescript
function debounce<
	GenericValue extends unknown = undefined
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
	}
): AsyncGenerator
```

## Paramètres

- `time` : Délai à attendre avant de laisser continuer l'exécution courante.
- `params.returnValue` : Valeur retournée quand un appel précédent est remplacé pendant le délai de debounce.

## Valeur de retour

`debounce()` retourne un générateur asynchrone. Le runner attend le délai avant de poursuivre la dernière exécution conservée, et termine les exécutions remplacées avec `params.returnValue`.

## Remarques

- L'état interne est stocké dans une `WeakMap` dont la clé est la référence du flow exécuté.
- Pour partager la même fenêtre de debounce entre plusieurs appels, réutilisez le même flow créé avec `F.create(...)` ou la même fonction obtenue avec `F.toFunction(...)`.
- Un `F.run(async function *() { ... })` déclaré inline crée une nouvelle référence à chaque appel et ne partage donc pas l'état de `debounce()`.
- Si une même exécution yield plusieurs fois `debounce(...)`, seul le premier effet rencontré est pris en compte par le runner.

## Voir aussi

- [`throttling`](/fr/v1/api/flow/throttling) - Ignore ou reporte les appels trop rapprochés sans attendre le dernier appel
- [`queue`](/fr/v1/api/flow/queue) - Sérialise les exécutions au lieu d'annuler l'appel précédent
- [`run`](/fr/v1/api/flow/run) - Exécute le flow et applique les effets de debounce
