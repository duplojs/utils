---
prev:
  text: "Démarrage rapide"
  link: "/fr/v1/guide/quickStart"
next:
  text: "Le pipe"
  link: "/fr/v1/guide/pipe"
---
# La curryfication

[[toc]]

## Le principe

La **curryfication** consiste à transformer une fonction qui prend plusieurs paramètres en une suite de fonctions qui prennent **un seul paramètre**.

Si on part d’une fonction :

```ts
f(a, b)
```

sa version curryfiée devient :

```ts
f(a)(b)
```

L’intérêt principal est de pouvoir **fixer une partie des paramètres** (on parle aussi d’*application partielle*) pour créer de nouvelles fonctions plus spécialisées.

## Comment ça se traduit dans `@duplojs/utils`

Dans cette librairie, la plupart des fonctions à **au moins deux paramètres** supportent :
- une forme **classique** : tu appelles la fonction “en une fois” ;
- une forme **curryfiée** : tu fournis d’abord la “configuration”, et tu récupères une fonction qui attend la donnée.

Techniquement, c’est fait via des **overloads TypeScript** : tu gardes un seul symbole exporté, mais deux façons de l’appeler.

## Exemple simple : `A.map`

```ts
import { A } from "@duplojs/utils";

// classique
const doubled1 = A.map([1, 2, 3], (n) => n * 2);

// curryfiée (on fixe la transformation)
const input = [1, 2, 3] as const;
const doubleAll = A.map<typeof input, number>((n) => n * 2);
const doubled2 = doubleAll(input);
```

## Application partielle : “fabriquer” des fonctions

L’idée est de créer des petites briques réutilisables, par exemple :

```ts
import { O } from "@duplojs/utils";

type Person = { name: string; age: number };
const getName = O.getProperty<Person, Person, "name">("name");
const name = getName({ name: "Ada", age: 36 });
```

Ou encore, pour préparer un prédicat puis l’utiliser plusieurs fois :

```ts
import { A, N } from "@duplojs/utils";

const isGreaterThan10 = N.greaterThan(10);
const values = A.filter([2, 12, 7, 42], (n) => isGreaterThan10(n));
```

## À retenir

- La forme curryfiée sert surtout à **pré-configurer** une fonction (clé, seuil, mapping, prédicat…) et à réutiliser le résultat.
- La forme classique est pratique quand tu as **toutes les valeurs sous la main** au même endroit.

## Try it

<MonacoTSEditor
src="/examples/v1/guide/curryfication/tryout.doc.ts"
majorVersion="v1"
height="950px"
/>
