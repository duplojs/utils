---
outline: [2, 3]
prev:
  text: "group"
  link: "/v1/api/either/group/fr"
next:
  text: "hasInformation"
  link: "/v1/api/either/hasInformation/fr"
---

# asyncGroup

La fonction **`asyncGroup()`** exécute en parallèle des `Either` synchrones ou asynchrones (promesses, `Future`) et renvoie le premier `Left` rencontré. Si tous sont `Right`, elle agrège leurs valeurs dans un objet typé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/asyncGroup/examples/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Paramètres

- `group` : Objet dont chaque propriété est un `Either`/`Promise`/`Future` ou une fonction retournant chacun d'entre eux.

## Valeur de retour

- `Right` avec un objet regroupant toutes les valeurs lorsqu'elles sont toutes `Right`.
- Sinon le premier `Left` qui échoue dans l'ordre de déclaration du groupe (synchrones ou asynchrones compris).

## Voir aussi

- [`group`](/v1/api/either/group/fr) - Version synchrone
- [`rightAsyncPipe`](/v1/api/either/rightAsyncPipe/fr) - Pipeline asynchrone sur `Right`
- [`future`](/v1/api/either/future/fr) - Enveloppe asynchrone compatible
