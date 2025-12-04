---
outline: [2, 3]
prev:
  text: "ok"
  link: "/v1/api/either/ok/fr"
next:
  text: "error"
  link: "/v1/api/either/error/fr"
---

# left

Construit un `EitherLeft` en associant **une information métier obligatoire** (string littérale) à une valeur représentant l'erreur. C'est la brique fondamentale pour signaler un échec contextualisé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/left/examples/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

```typescript
function left<
	GenericInformation extends string, 
	const GenericInput extends unknown = undefined
>(
  information: GenericInformation,
  input?: GenericInput
): EitherLeft<GenericInformation, GenericInput>
```

## Paramètres

- `information` : string littérale qui précise le type d'erreur (ex. `"user.notFound"`).
- `input` : payload optionnel qui transporte les données utiles pour diagnostiquer le problème.

## Valeur de retour

Un `EitherLeft<Information, Value>` que vous pouvez filtrer avec `E.isLeft`, `E.hasInformation` ou `E.whenHasInformation`.

## Bonnes pratiques

- Utilisez des chaînes explicites (`"auth.invalidToken"`, `"order.paymentFailed"`).
- Réutilisez l'information comme clef de pattern matching pour déclencher la bonne réponse applicative.
- Retournez toujours un `Either` homogène (toutes les branches d'une fonction doivent renvoyer le même type d'Either).

## Voir aussi

- [`right`](/v1/api/either/right/fr) – Pendant côté succès.
- [`error`](/v1/api/either/error/fr) – Alias spécialisé basé sur `left("error", value)`.
- [`fail`](/v1/api/either/fail/fr) – Variante `Left` sans payload.
