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

# whenIsRightElse

Applique un callback sur les valeurs `Right` et un second callback sur toutes les valeurs non-`Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRightElse/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsRightElse<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputElse
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  elseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): GenericOutputRight | GenericOutputElse;
```

### Signature currifiée

```typescript
function whenIsRightElse<
  GenericInput extends unknown,
  GenericOutputRight,
  GenericOutputElse
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Right>>) => GenericOutputRight,
  elseFunction: (value: Extract<GenericInput, Left> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): (input: GenericInput) => GenericOutputRight | GenericOutputElse;
```

## Paramètres

- `theFunction` : Callback exécuté quand l'entrée est `Right` (reçoit le payload unwrap).
- `elseFunction` : Callback exécuté pour les valeurs restantes (`Left` ou non-Either), sans unwrap.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

Renvoie le résultat de `theFunction` pour un `Right`, sinon le résultat de `elseFunction`.

## Voir aussi

- [`whenIsLeftElse`](/fr/v1/api/either/whenIsLeftElse) - Variante symétrique pour `Left`.
- [`whenIsRight`](/fr/v1/api/either/whenIsRight) - Mapping côté Right sans else explicite.
