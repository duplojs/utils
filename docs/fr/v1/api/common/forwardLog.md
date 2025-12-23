---
outline: [2, 3]
prev:
  text: "forward"
  link: "/fr/v1/api/common/forward"
next:
  text: "justReturn"
  link: "/fr/v1/api/common/justReturn"
---

# forwardLog

La fonction **`forwardLog()`** logge la valeur reçue (side-effect) puis la renvoie inchangée, pratique pour inspecter un pipeline sans le casser.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/forwardLog/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

```typescript
function forwardLog<
	const GenericInput extends unknown
>(input: GenericInput): GenericInput;
```

## Paramètres

- `input` : La valeur à logguer et renvoyer.

## Valeur de retour

La même valeur passée en argument, après l'avoir envoyée dans la sortie standard.

## Voir aussi

- [`forward`](/fr/v1/api/common/forward) - Version sans side-effect
- [`pipe`](/fr/v1/api/common/pipe) - Pour intégrer `forwardLog` dans un chainage
