---
outline: [2, 3]
prev:
  text: "group"
  link: "/fr/v1/api/either/group"
next:
  text: "hasInformation"
  link: "/fr/v1/api/either/hasInformation"
---

# asyncGroup

La fonction **`asyncGroup()`** exécute en parallèle des `Either` synchrones ou asynchrones (promesses, `Future`) et renvoie le premier `Left` rencontré. Si tous sont `Right`, elle agrège leurs valeurs dans un objet typé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/asyncGroup/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Paramètres

- `group` : Objet dont chaque propriété est un `Either`/`Promise`/`Future` ou une fonction retournant chacun d'entre eux.

## Valeur de retour

- `Right` avec un objet regroupant toutes les valeurs lorsqu'elles sont toutes `Right`.
- Sinon le premier `Left` qui échoue dans l'ordre de déclaration du groupe (synchrones ou asynchrones compris).

## Voir aussi

- [`group`](/fr/v1/api/either/group) - Version synchrone
- [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe) - Pipeline asynchrone sur `Right`
- [`future`](/fr/v1/api/either/future) - Enveloppe asynchrone compatible
