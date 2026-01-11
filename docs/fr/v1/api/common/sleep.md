---
outline: [2, 3]
description: "La fonction sleep() crée une pause asynchrone pendant un nombre de millisecondes."
prev:
  text: "asyncRetry"
  link: "/fr/v1/api/common/asyncRetry"
next:
  text: "memo"
  link: "/fr/v1/api/common/memo"
---

# sleep

La fonction **`sleep()`** crée une pause asynchrone pendant un nombre de millisecondes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/sleep/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function sleep(millieSeconde?: number): Promise<void>;
```

## Paramètres

- `millieSeconde` : Durée en millisecondes (optionnelle, `0` par défaut).

## Valeur de retour

Une promesse qui se résout après la durée indiquée.

## Voir aussi

- [`asyncRetry`](/fr/v1/api/common/asyncRetry) - Peut utiliser des pauses entre les tentatives
- [`asyncLoop`](/fr/v1/api/common/asyncLoop) - Boucle asynchrone pouvant intégrer des temporisations
