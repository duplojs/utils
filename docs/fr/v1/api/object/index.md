---
outline: [2, 3]
prev:
  text: 'Number'
  link: '/fr/v1/api/number/'
next:
  text: 'Pattern'
  link: '/fr/v1/api/pattern/'
---

# Object

Fonctions pour manipuler les objets de manière immutable et type-safe. Toutes les fonctions préservent l'objet original et retournent une nouvelle valeur.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DObject` et `O` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DObject, O } from "@duplojs/utils";
import * as DObject from "@duplojs/utils/object";
import * as O from "@duplojs/utils/object";
```

## Accès et extraction

### [keys](/fr/v1/api/object/keys)
Retourne un tableau des clés d'un objet avec un typage précis.

### [values](/fr/v1/api/object/values)
Retourne un tableau des valeurs d'un objet.

### [entries](/fr/v1/api/object/entries)
Retourne un tableau des paires clé-valeur d'un objet avec un typage strict.

### [entry](/fr/v1/api/object/entry)
Crée une paire clé-valeur typée (tuple).

### [fromEntries](/fr/v1/api/object/fromEntries)
Construit un objet à partir d'un tableau de paires clé-valeur.

### [getProperty](/fr/v1/api/object/getProperty)
Récupère la valeur d'une propriété d'un objet.

### [getDeepProperty](/fr/v1/api/object/getDeepProperty)
Récupère la valeur d'une propriété profonde via un chemin (path notation).

## Transformation

### [pick](/fr/v1/api/object/pick)
Crée un nouvel objet en sélectionnant uniquement certaines propriétés.

### [omit](/fr/v1/api/object/omit)
Crée un nouvel objet en excluant certaines propriétés.

### [assign](/fr/v1/api/object/assign)
Fusionne plusieurs objets ensemble (similaire à Object.assign mais type-safe).

### [override](/fr/v1/api/object/override)
Remplace les propriétés d'un objet par celles d'un autre, en ignorant les valeurs undefined.

### [transformProperty](/fr/v1/api/object/transformProperty)
Transforme une propriété spécifique d'un objet via une fonction.

### [transformProperties](/fr/v1/api/object/transformProperties)
Transforme plusieurs propriétés d'un objet via des fonctions.

### [to](/fr/v1/api/object/to)
Transforme une valeur en un nouvel objet selon un schéma de transformation.

## Vérification et filtrage

### [hasKeys](/fr/v1/api/object/hasKeys)
Vérifie si un objet possède certaines clés (type guard).

### [discriminate](/fr/v1/api/object/discriminate)
Discrimine un objet par la valeur d'une propriété (type guard pour les unions).

### [deepDiscriminate](/fr/v1/api/object/deepDiscriminate)
Discrimine un objet par la valeur d'une propriété profonde (type guard pour les unions).
