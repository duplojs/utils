# AGENTS — Contexte projet

## Présentation
Librairie d’utilitaires TypeScript publiée sur NPM, orientée robustesse et qualité du code.

La librairie est organisée par namespaces (`DArray`, `DObject`, etc.) et couvre :
- utilitaires généraux par type
- parsing de données (`DDataParser`)
- outils orientés DDD (`DClean`)
- concepts monadiques (`DEither`)
- pattern matching (`DPattern`)

Philosophie :
- programmation fonctionnelle
- immutabilité
- compatibilité avec un système de `pipe`
- chaque fonction supporte l’appel classique et currifié via overloads
  (sans duplication de symbole, sauf si la fonction ne possède qu’un paramètre)

## Namespaces
common
DArray
DNumber
DEither
DObject
DString
DGenerator
DPattern
DDataParser
DDate
DClean

## Répertoires de travail
- `scripts/` : code source
  - `scripts/common/` → common
  - `scripts/object/` → DObject
  - `scripts/array/` → DArray
  - …
- `docs/` : documentation
- `tests/` : tests

## Structure de la documentation
- `docs/{fr,en}/index.md`: pages homes
- `docs/{fr,en}/v1/guide/*.md` : guides
- `docs/{fr,en}/v1/api/{namespace}/index.md` : sommaire + présentation du namespace
- `docs/{fr,en}/v1/api/{namespace}/{function}.md` : documentation d’une fonction
- `docs/{fr,en}/v1/api/{namespace}/{concept + function}.md` : cas spécifiques (rare)
- `docs/examples/v1/api/{namespace}/{function}/tryout.doc.ts` : exemple simple
- `docs/examples/v1/api/{namespace}/{function}/otherExample.doc.ts` : cas spécifiques

## Régle des exemples de code de la documentation
- les commentaires doivent être en anglais
- les noms de variable doivent être suppérieur a 2 char
- les exempel doivent étre wrappé quand il y a plus de 1 element dans une structure

## Format obligatoire d’une page API (fonction)
Chaque page `docs/{fr,en}/v1/api/{namespace}/{function}.md` doit contenir :

### Frontmatter YAML
- `outline`: [2, 3]
- `prev`: chemin relatif vers la page précédente
- `next`: chemin relatif vers la page suivante

### Contenu
- `# NomDeLaFonction`
- Description courte
- Exemple interactif avec `<MonacoTSEditor>`
- Syntaxe (classique + currifiée si existante)
- Paramètres
- Valeur de retour
- Section **Voir aussi**

## Structure des tests
Chaque fonction possède un fichier de test correspondant.

Correspondance :
- `scripts/number/divide.ts` → `tests/number/divide.test.ts`
- `scripts/object/getProperty.ts` → `tests/object/getProperty.test.ts`

### Structure d’un fichier de test
- Chaque fichier contient un `describe`
  - le `name` du `describe` est **le nom de la fonction testée**
- À l’intérieur :
  - plusieurs `it`
  - chaque `it` décrit **un cas de test précis**

Chaque test comprend systématiquement :
1. un test du comportement de la fonction
2. un test de type via `ExpectType`

Exemple de test de type :
```ts
type check = ExpectType<
  typeof valeurTestée,
  TypeAttendu,
  "strict" // obligatoirement strict et rien d'autre
>
```

## Structure de la jsDoc

Chaque fonction de chaque domaine possède une documentation jsDoc dans le dossier `jsDoc/{namespace}/{function}/index.md`.
a ce fichier y est accolé une série d'exemples dans le dossier `jsDoc/{namespace}/{function}/example.ts`.

Chaque fichier `index.md` doit contenir les sections suivantes dans l'ordre :
1. Description de la fonction
	1.1 Description courte
	1.2 Description des styles d'appel supportés (classique et currifié)
	1.3 Description du comportement
2. Exemple d'utilisation avec `@example` (les exemples doivent être importer avec la balise `{@include ...[lineStart,lineEnd]}`)
3. Remarques additionnelles avec `@remarks` (optionnel)
4. Section Voir aussi avec `@see` (doit contenir au moins un lien vers la documentation en ligne)
Chaque fichier `example.ts` doit contenir au moins 3 exemples d'utilisation de la fonction, couvrant les cas d'usage les plus courants.

:warning: certaines fonctions en plus des overload `classque` et currifié peuvent aussi avoir des overloads predicate (`classique predicate` et `currifié predicate`). il est important donc de l'expliquer dans la description courte et les styles d'appel supportés. et aussi de montrer un exemple qui utilise un if pour la version `classique predicate` et un exemple qui utilise un pipe + when pour la version `currifié predicate`.