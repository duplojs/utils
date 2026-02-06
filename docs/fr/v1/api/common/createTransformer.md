---
outline: [2, 3]
description: "La fonction createTransformer() crée un transformateur récursif à partir d'un nom de méthode et l'applique sur des objets/tableaux imbriqués."
prev:
  text: "createEnum"
  link: "/fr/v1/api/common/createEnum"
next:
  text: "globalStore"
  link: "/fr/v1/api/common/globalStore"
---

# createTransformer

La fonction **`createTransformer()`** crée un transformateur récursif à partir d'un nom de méthode.
La fonction retournée parcourt récursivement les objets et tableaux imbriqués, puis appelle cette méthode sur les valeurs qui l'implémentent.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/createTransformer/tryout.doc.ts"
  majorVersion="v1"
  height="840px"
/>

## Syntaxe

```typescript
function createTransformer<
	GenericMethodName extends string
>(
	methodName: GenericMethodName
): TransformerFunction<GenericMethodName>
```

## Paramètres

- `methodName` : Nom de méthode à appeler récursivement sur les valeurs compatibles.

## Valeur de retour

Une fonction de transformation qui projette récursivement les valeurs imbriquées.

Deux transformateurs par défaut sont fournis par la librairie : `toNative` et `toJSON`.

## Voir aussi

- [`createEnum`](/fr/v1/api/common/createEnum) - Factory d'enum typé immuable
- [`unwrap`](/fr/v1/api/common/unwrap) - Récupère la valeur interne wrappée
