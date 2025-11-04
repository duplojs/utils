---
outline: [2, 3]
prev:
  text: 'Array'
  link: '/v1/api/array/fr'
next:
  text: 'Pattern'
  link: '/v1/api/pattern/fr'
---

# Object

Fonctions pour manipuler les objets de manière immutable et type-safe. Toutes les fonctions préservent l'objet original et retournent une nouvelle valeur.

## Accès et extraction

### [keys](/v1/api/object/keys/fr)
Retourne un tableau des clés d'un objet avec un typage précis.

### [values](/v1/api/object/values/fr)
Retourne un tableau des valeurs d'un objet.

### [entries](/v1/api/object/entries/fr)
Retourne un tableau des paires clé-valeur d'un objet avec un typage strict.

### [entry](/v1/api/object/entry/fr)
Crée une paire clé-valeur typée (tuple).

### [fromEntries](/v1/api/object/fromEntries/fr)
Construit un objet à partir d'un tableau de paires clé-valeur.

### [getProperty](/v1/api/object/getProperty/fr)
Récupère la valeur d'une propriété d'un objet.

### [getDeepProperty](/v1/api/object/getDeepProperty/fr)
Récupère la valeur d'une propriété profonde via un chemin (path notation).

## Transformation

### [pick](/v1/api/object/pick/fr)
Crée un nouvel objet en sélectionnant uniquement certaines propriétés.

### [omit](/v1/api/object/omit/fr)
Crée un nouvel objet en excluant certaines propriétés.

### [assign](/v1/api/object/assign/fr)
Fusionne plusieurs objets ensemble (similaire à Object.assign mais type-safe).

### [override](/v1/api/object/override/fr)
Remplace les propriétés d'un objet par celles d'un autre, en ignorant les valeurs undefined.

### [transformProperty](/v1/api/object/transformProperty/fr)
Transforme une propriété spécifique d'un objet via une fonction.

### [transformProperties](/v1/api/object/transformProperties/fr)
Transforme plusieurs propriétés d'un objet via des fonctions.

### [to](/v1/api/object/to/fr)
Transforme une valeur en un nouvel objet selon un schéma de transformation.

## Vérification et filtrage

### [hasKeys](/v1/api/object/hasKeys/fr)
Vérifie si un objet possède certaines clés (type guard).

### [discriminate](/v1/api/object/discriminate/fr)
Discrimine un objet par la valeur d'une propriété (type guard pour les unions).

### [deepDiscriminate](/v1/api/object/deepDiscriminate/fr)
Discrimine un objet par la valeur d'une propriété profonde (type guard pour les unions).
