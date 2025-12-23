---
prev:
  text: "Introduction"
  link: "/fr/v1/guide/"
next:
  text: "La curryfication"
  link: "/fr/v1/guide/currying"
---

# Démarrage rapide

[[toc]]

## Installation

::: code-group
```bash [npm]
npm install @duplojs/utils
```
```bash [yarn]
yarn add @duplojs/utils
```
```bash [pnpm]
pnpm add @duplojs/utils
```
:::


## Configurations
Il faut commencer par définir les bons paramètres dans votre `tsconfig`.

```json
{
	// ...
	"compilerOptions": {
		// ...
		"strict": true,
		"noImplicitAny": true,
		"strictNullChecks": true,
		"strictFunctionTypes": true,
		"strictBindCallApply": true,
		"strictPropertyInitialization": true,
		"noImplicitThis": true,
		"useUnknownInCatchVariables": true,
		"alwaysStrict": true,
		"noImplicitReturns": true,
		"noUncheckedIndexedAccess": true,
		"noImplicitOverride": true,   
	}
}
```

## Organisation de la librairie 
La librairie est organisée par domaines :
- [Common](/fr/v1/api/common/) Fonctions généralistes qui ne sont pas attribuées particulièrement à un type.
- [Array](/fr/v1/api/array/) Fonctions orientées pour manipuler les tableaux et les tuples.
- [Clean](/fr/v1/api/clean/) Outils de définition de structures métier.
- [DataParser](/fr/v1/api/dataParser/) Création de schémas de validation de données.
- [Date](/fr/v1/api/date/) Fonctions de manipulation de dates.
- [Either](/fr/v1/api/either/) Outils de définition de résultats.
- [Generator](/fr/v1/api/generator/) Fonctions pour manipuler les itérables avec des générateurs.
- [Number](/fr/v1/api/number/) Fonctions de manipulation de nombres.
- [Object](/fr/v1/api/object/) Fonctions de manipulation d'objets.
- [Pattern](/fr/v1/api/pattern/) Outils de pattern matching.
- [String](/fr/v1/api/string/) Fonctions de manipulation de chaînes de caractères.

##  Path d'importation.
Tout les module de la librairy peuvent étre importé depuis la racine.  
```ts
import { A, C, DPE, D, E, G, N, O, P, S, /* ...common */ } from "@duplojs/utils";
```

### Treeschaking
Vous pouvez importer les diférente parti de la librairy de la manier suivante pour optimisé le build de vos projet:
```ts
import * as Common from "@duplojs/utils/common";
import * as A from "@duplojs/utils/array";
import * as C from "@duplojs/utils/clean";
import * as DP from "@duplojs/utils/dataParser";
import * as D from "@duplojs/utils/date";
import * as E from "@duplojs/utils/either";
import * as G from "@duplojs/utils/generator";
import * as N from "@duplojs/utils/number";
import * as O from "@duplojs/utils/object";
import * as P from "@duplojs/utils/pattern";
import * as S from "@duplojs/utils/string";
```

## Enjoy !
<MonacoTSEditor
src="/examples/v1/guide/quickStart/tryout.doc.ts"
majorVersion="v1"
height="700px"
/>
