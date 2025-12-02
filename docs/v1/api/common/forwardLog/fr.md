---
outline: [2, 3]
prev:
  text: "forward"
  link: "/v1/api/common/forward/fr"
next:
  text: "justReturn"
  link: "/v1/api/common/justReturn/fr"
---

# forwardLog

La fonction **`forwardLog()`** logge la valeur reçue (side-effect) puis la renvoie inchangée, pratique pour inspecter un pipeline sans le casser.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/forwardLog/examples/tryout.doc.ts"
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

- [`forward`](/v1/api/common/forward/fr) - Version sans side-effect
- [`pipe`](/v1/api/common/pipe/fr) - Pour intégrer `forwardLog` dans un chainage
