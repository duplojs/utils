---
outline: [2, 3]
description: "Trouve la date la plus proche d'une cible dans un itérable de TheDate. En cas d'égalité, un tieBreaker optionnel permet de favoriser le passé ou le futur."
prev:
  text: "each"
  link: "/fr/v1/api/date/each"
next:
  text: "constants"
  link: "/fr/v1/api/date/constants"
---

# closestTo

Trouve la date la plus proche d'une cible dans un itérable de `TheDate`. En cas d'égalité, un `tieBreaker` optionnel permet de favoriser le passé ou le futur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/closestTo/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
interface ClosestToParams {
	tieBreaker?: "favorPast" | "favorFuture";
}
```

### Signature classique

```typescript
function closestTo<
	GenericIterable extends Iterable<TheDate>
>(
	target: TheDate,
	params?: ClosestToParams
): (input: GenericIterable) => TheDate | undefined
```

### Signature currifiée

```typescript
function closestTo<
	GenericIterable extends Iterable<TheDate>
>(
	input: GenericIterable,
	target: TheDate,
	params?: ClosestToParams
): TheDate | undefined
```

## Paramètres

- `target` : Date recherchée.
- `input` : Itérable de `TheDate`.
- `tieBreaker` : (Optionnel) Gère les égalités (`favorPast` par défaut).

## Valeur de retour

Le `TheDate` le plus proche, ou `undefined` si l'itérable est vide.

## Voir aussi

- [`each`](/fr/v1/api/date/each)
- [`round`](/fr/v1/api/date/round)
