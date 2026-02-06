---
outline: [2, 3]
prev:
  text: "createTime"
  link: "/fr/v1/api/date/createTime"
next:
  text: "now"
  link: "/fr/v1/api/date/now"
---

# createTimeOrThrow

La fonction **`createTimeOrThrow()`** construit un `TheTime` à partir d'un `TheTime`, d'un `SerializedTheTime`, d'une valeur numérique ou d'un `SpoolingTime`. Elle lance `CreateTheTimeError` si l'entrée est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/createTimeOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function createTimeOrThrow(
	input: number | TheTime | SpoolingTime | SerializedTheTime
): TheTime
```

## Paramètres

- `input` : Valeur de temps (`number`), `TheTime`, `SerializedTheTime` ou `SpoolingTime`.

## Valeur de retour

Un `TheTime` valide. Si la valeur est hors limites ou incohérente, une `CreateTheTimeError` est lancée.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime) – Renvoie un `MayBeTime` au lieu de lancer une exception.
- [`isSafeTimeValue`](/fr/v1/api/date/isSafeTimeValue) – Vérifie les bornes numériques.
