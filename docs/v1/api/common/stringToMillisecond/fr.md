---
outline: [2, 3]
prev:
  text: "toString"
  link: "/v1/api/common/toString/fr"
next:
  text: "stringToBytes"
  link: "/v1/api/common/stringToBytes/fr"
---

# stringToMillisecond

La fonction **`stringToMillisecond()`** convertit des durées exprimées sous forme de chaîne (`"10s"`, `"2h"`, `"1.5d"`, etc.) ou de nombre en millisecondes. Elle lève une erreur typée si le format est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/stringToMillisecond/examples/tryout.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Syntaxe

```typescript
const unitMapper: {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
};

type MillisecondInString =
	`${number}${keyof typeof unitMapper}` |
	`${number}.${number}${keyof typeof unitMapper}`;

function stringToMillisecond(
	millisecondInString: MillisecondInString | number,
	...millisecondInStrings: (MillisecondInString | number)[]
): number;
```

## Paramètres

- `millisecondInString` : Durée principale sous forme de chaîne ou nombre.
- `millisecondInStrings` : Durées additionnelles à sommer (optionnel).

## Valeur de retour

Un nombre de millisecondes correspondant à la somme des durées fournies.

## Voir aussi

- [`stringToBytes`](/v1/api/common/stringToBytes/fr) - Conversion de tailles en octets
