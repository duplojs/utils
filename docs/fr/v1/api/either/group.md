---
outline: [2, 3]
prev:
  text: "rightAsyncPipe"
  link: "/fr/v1/api/either/rightAsyncPipe"
next:
  text: "asyncGroup"
  link: "/fr/v1/api/either/asyncGroup"
---

# group

La fonction **`group()`** exécute plusieurs `Either` (ou fonctions renvoyant un `Either`) et renvoie le premier `Left` rencontré. Si tous sont `Right`, elle agrège leurs valeurs dans un objet typé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/group/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Paramètres

- `group` : Objet dont chaque propriété est un `Either` ou une fonction retournant un `Either`.

## Valeur de retour

- `Right` avec un objet regroupant toutes les valeurs lorsqu'elles sont toutes `Right`.
- Sinon le premier `Left` qui échoue dans l'ordre de déclaration du groupe.

## Voir aussi

- [`asyncGroup`](/fr/v1/api/either/asyncGroup) - Version asynchrone acceptant des promesses ou `Future`
- [`rightPipe`](/fr/v1/api/either/rightPipe) - Pipeline synchrone sur `Right`
- [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe) - Pipeline asynchrone sur `Right`
