---
outline: [2, 3]
prev:
  text: "pipe"
  link: "/fr/v1/api/common/pipe"
next:
  text: "innerPipe"
  link: "/fr/v1/api/common/innerPipe"
description: "Stabilise l'inference de types dans un pipe en neutralisant l'influence d'une fonction."
---

# pipeCall

La fonction **`pipeCall()`** enveloppe une fonction pour eviter que son premier argument n'influence l'inference du `pipe`. Utile quand une fonction n'est pas generique sur son premier parametre et que son type remonte dans la chaine, ce qui casse l'inference globale.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/pipeCall/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

```typescript
function pipeCall<
	GenericInput extends unknown,
	GenericOutput extends unknown
>(
	theFunction: (input: NoInfer<GenericInput>) => GenericOutput
): (input: GenericInput) => NoInfer<GenericOutput>;
```

## Parametres

- `theFunction` : La fonction a utiliser dans un `pipe` sans qu'elle force l'inference du type d'entree.

## Valeur de retour

La meme fonction, typee pour preserver l'inference du pipe.

## Voir aussi

- [`pipe`](/fr/v1/api/common/pipe) - Compose des fonctions synchrones
- [`innerPipe`](/fr/v1/api/common/innerPipe) - Version reutilisable du pipe
