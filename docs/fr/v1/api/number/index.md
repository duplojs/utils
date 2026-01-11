---
outline: [2, 3]
description: "Fonctions pour manipuler les nombres de manière immutable et type-safe. Toutes les fonctions préservent les valeurs originales et retournent une nouvelle valeur."
prev:
  text: 'String'
  link: '/fr/v1/api/string/'
next:
  text: 'Object'
  link: '/fr/v1/api/object/'
---

# Number

Fonctions pour manipuler les nombres de manière immutable et type-safe. Toutes les fonctions préservent les valeurs originales et retournent une nouvelle valeur.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DNumber` et `N` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DNumber, N } from "@duplojs/utils";
import * as DNumber from "@duplojs/utils/number";
import * as N from "@duplojs/utils/number";
```

## Opérations arithmétiques

### [add](/fr/v1/api/number/add)
Additionne deux nombres.

### [subtract](/fr/v1/api/number/subtract)
Soustrait un nombre d'un autre.

### [multiply](/fr/v1/api/number/multiply)
Multiplie deux nombres.

### [divide](/fr/v1/api/number/divide)
Divise un nombre par un autre.

### [modulo](/fr/v1/api/number/modulo)
Retourne le reste de la division entre deux nombres.

### [power](/fr/v1/api/number/power)
Élève un nombre à une puissance spécifiée.

### [negate](/fr/v1/api/number/negate)
Inverse le signe d'un nombre.

## Fonctions mathématiques

### [abs](/fr/v1/api/number/abs)
Retourne la valeur absolue d'un nombre.

### [round](/fr/v1/api/number/round)
Arrondit un nombre à l'entier le plus proche.

### [ceil](/fr/v1/api/number/ceil)
Arrondit un nombre vers le haut.

### [floor](/fr/v1/api/number/floor)
Arrondit un nombre vers le bas.

### [trunc](/fr/v1/api/number/trunc)
Retourne la partie entière d'un nombre.

### [max](/fr/v1/api/number/max)
Retourne le plus grand nombre d'un tuple.

### [min](/fr/v1/api/number/min)
Retourne le plus petit nombre d'un tuple.

### [clamp](/fr/v1/api/number/clamp)
Limite un nombre entre une valeur minimale et maximale.

### [sqrt](/fr/v1/api/number/sqrt)
Retourne la racine carrée d'un nombre.

### [toFixed](/fr/v1/api/number/toFixed)
Formate un nombre avec un nombre fixe de décimales.

## Fonctions trigonométriques

### [sin](/fr/v1/api/number/sin)
Retourne le sinus d'un nombre (en radians).

### [cos](/fr/v1/api/number/cos)
Retourne le cosinus d'un nombre (en radians).

### [tan](/fr/v1/api/number/tan)
Retourne la tangente d'un nombre (en radians).

### [asin](/fr/v1/api/number/asin)
Retourne l'arc sinus d'un nombre.

### [acos](/fr/v1/api/number/acos)
Retourne l'arc cosinus d'un nombre.

### [atan](/fr/v1/api/number/atan)
Retourne l'arc tangente d'un nombre.

### [atan2](/fr/v1/api/number/atan2)
Retourne l'arc tangente du quotient de deux nombres.

## Comparaison

### [greater](/fr/v1/api/number/greater)
Vérifie si un nombre est supérieur à un autre.

### [greaterThan](/fr/v1/api/number/greaterThan)
Vérifie si un nombre est supérieur ou égal à un autre.

### [less](/fr/v1/api/number/less)
Vérifie si un nombre est inférieur à un autre.

### [lessThan](/fr/v1/api/number/lessThan)
Vérifie si un nombre est inférieur ou égal à un autre.
