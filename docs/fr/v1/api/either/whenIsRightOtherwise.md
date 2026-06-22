---
outline: [2, 3]
description: "Applique un callback sur les valeurs Right et un second callback sur toutes les valeurs non-Right."
prev:
  text: "whenIsRight"
  link: "/fr/v1/api/either/whenIsRight"
next:
  text: "unwrapRight"
  link: "/fr/v1/api/either/unwrapRight"
---

# whenIsRightOtherwise

Applique un callback sur les valeurs `Right` et un second callback sur toutes les valeurs non-`Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRightOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsRightOtherwise<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputOtherwise
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  otherwiseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): GenericOutputRight | GenericOutputOtherwise;
```

### Signature currifiée

```typescript
function whenIsRightOtherwise<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputOtherwise
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  otherwiseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): (input: GenericInput) => GenericOutputRight | GenericOutputOtherwise;
```

## Paramètres

- `theFunction` : Callback exécuté quand l'entrée est `Right` (reçoit le payload unwrap).
- `otherwiseFunction` : Callback exécuté pour les valeurs restantes (`Left` ou non-Either), sans unwrap.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

Renvoie le résultat de `theFunction` pour un `Right`, sinon le résultat de `otherwiseFunction`.

## Voir aussi

- [`whenIsLeftOtherwise`](/fr/v1/api/either/whenIsLeftOtherwise) - Variante symétrique pour `Left`.
- [`whenIsRight`](/fr/v1/api/either/whenIsRight) - Mapping côté Right sans branche otherwise explicite.
