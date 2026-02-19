---
outline: [2, 3]
description: "La fonction justExec() exécute immédiatement un callback et renvoie son résultat."
prev:
  text: "justReturn"
  link: "/fr/v1/api/common/justReturn"
next:
  text: "when"
  link: "/fr/v1/api/common/when"
---

# justExec

La fonction **`justExec()`** exécute immédiatement un callback et renvoie son résultat.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/justExec/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntaxe

```typescript
function justExec<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): GenericOutput;
```

## Paramètres

- `theFunction` : Callback exécuté immédiatement.

## Valeur de retour

La valeur retournée par `theFunction`.

## Voir aussi

- [`justReturn`](/fr/v1/api/common/justReturn) - Construit un callback constant qui renvoie toujours la même valeur
- [`pipe`](/fr/v1/api/common/pipe) - Chaîner des transformations et injecter `justExec` dans une étape
