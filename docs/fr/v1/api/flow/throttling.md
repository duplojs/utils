---
outline: [2, 3]
description: "Ignore ou reporte les exécutions trop rapprochées pour un même flow."
prev:
  text: "queue"
  link: "/fr/v1/api/flow/queue"
next:
  text: "breakIf"
  link: "/fr/v1/api/flow/breakIf"
---

# throttling

La fonction **`throttling()`** empêche plusieurs exécutions trop proches d'un même flow. Elle peut soit retourner immédiatement une valeur de repli, soit garder seulement le dernier appel avec `keepLast: true`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/throttling/tryout.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Syntaxe

```typescript
function throttling<
	GenericValue extends unknown = undefined,
	GenericKeepLast extends boolean = false
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
		keepLast?: GenericKeepLast;
	}
): Generator | AsyncGenerator
```

## Paramètres

- `time` : Fenêtre de temps minimale entre deux exécutions du même flow.
- `params.returnValue` : Valeur retournée quand un appel est ignoré pendant la fenêtre de throttling.
- `params.keepLast` : Quand cette option vaut `true`, seul le dernier appel ignoré est rejoué après l'attente.

## Valeur de retour

Par défaut, `throttling()` retourne un générateur synchrone. Avec `keepLast: true`, il retourne un générateur asynchrone qui attend avant de reprendre le dernier appel conservé.

## Remarques

- L'état interne est stocké dans une `WeakMap` dont la clé est la référence du flow exécuté.
- Pour partager la même fenêtre de throttling entre plusieurs appels, réutilisez le même flow créé avec `F.create(...)` ou la même fonction obtenue avec `F.toFunction(...)`.
- Un `F.run(function *() { ... })` déclaré inline ne partage pas cette fenêtre avec les appels suivants.

## Voir aussi

- [`queue`](/fr/v1/api/flow/queue) - Sérialise les exécutions au lieu de les ignorer
- [`calledByNext`](/fr/v1/api/flow/calledByNext) - Déclenche un callback quand une exécution suivante remplace l'actuelle
- [`run`](/fr/v1/api/flow/run) - Exécute le flow et applique les effets de throttling
