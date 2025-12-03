---
outline: [2, 3]
prev:
  text: "asyncRetry"
  link: "/v1/api/common/asyncRetry/fr"
next:
  text: "externalPromise"
  link: "/v1/api/common/externalPromise/fr"
---

# sleep

La fonction **`sleep()`** crée une pause asynchrone pendant un nombre de millisecondes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/sleep/examples/tryout.doc.ts"
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

- [`asyncRetry`](/v1/api/common/asyncRetry/fr) - Peut utiliser des pauses entre les tentatives
- [`asyncLoop`](/v1/api/common/asyncLoop/fr) - Boucle asynchrone pouvant intégrer des temporisations
