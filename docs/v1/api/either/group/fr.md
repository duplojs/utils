---
outline: [2, 3]
prev:
  text: "rightAsyncPipe"
  link: "/v1/api/either/rightAsyncPipe/fr"
next:
  text: "asyncGroup"
  link: "/v1/api/either/asyncGroup/fr"
---

# group

La fonction **`group()`** exécute plusieurs `Either` (ou fonctions renvoyant un `Either`) et renvoie le premier `Left` rencontré. Si tous sont `Right`, elle agrège leurs valeurs dans un objet typé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/group/examples/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Paramètres

- `group` : Objet dont chaque propriété est un `Either` ou une fonction retournant un `Either`.

## Valeur de retour

- `Right` avec un objet regroupant toutes les valeurs lorsqu'elles sont toutes `Right`.
- Sinon le premier `Left` qui échoue dans l'ordre de déclaration du groupe.

## Voir aussi

- [`asyncGroup`](/v1/api/either/asyncGroup/fr) - Version asynchrone acceptant des promesses ou `Future`
- [`rightPipe`](/v1/api/either/rightPipe/fr) - Pipeline synchrone sur `Right`
- [`rightAsyncPipe`](/v1/api/either/rightAsyncPipe/fr) - Pipeline asynchrone sur `Right`
