# My Product App

Une application Web en ReactJS permettant de gérer des produits : les consulter, les modifier, les supprimer ou en créer de nouveaux. Cette application utilise **Material UI** pour le design, **Redux** pour la gestion de l'état, et suit les règles de **ESLint**.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé [Node.js](https://nodejs.org/) sur votre machine.

## Installation

1. **Clonez le projet** depuis le repository Git (si vous n'avez pas encore cloné le projet) :
   
   ```bash
   git clone https://github.com/votre-utilisateur/my-product-app.git
   cd my-product-app
2. **Installez les dépendances** nécessaires :

   ```bash
   npm install
   ```

## Lancer le projet

Pour démarrer l'application en mode développement :

```bash
npm run dev
```
## Structure du projet

src/
├── api/                   # Appels à l'API backend
│   └── productApi.ts
├── app/                   # Configuration Redux
│   └── store.ts
├── components/            # Composants réutilisables
│   ├── Layout/            # Header, Footer, etc.
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── Product/           # Composants liés aux produits
│       ├── ProductList.tsx
│       ├── ProductForm.tsx
│       └── ProductItem.tsx
├── features/              # Slices Redux
│   └── productSlice.ts
├── hooks/                 # Hooks personnalisés
│   └── useFetchProducts.ts
├── pages/                 # Pages principales
│   ├── Login/             # Page de connexion
│   │   ├── Login.tsx
│   │   └── login.css
│   ├── Home/              # Liste des produits
│   │   ├── Home.tsx
│   │   └── home.css
│   └── EditProduct/       # Édition d'un produit (ou popup)
│       ├── EditProduct.tsx
│       └── editProduct.css
├── styles/                # Fichiers de styles globaux
│   └── global.css
├── utils/                 # Fonctions utilitaires
│   └── constants.ts
└── main.tsx               # Point d'entrée principal

## Fonctionnalités

### Gestion des Produits

L'application permet à l'utilisateur de :

- **Consulter les produits** : Affichage d'une liste de produits.
- **Ajouter un produit** : Formulaire de création de produit.
- **Modifier un produit** : Option de modification pour chaque produit.
- **Supprimer un produit** : Option de suppression pour chaque produit.

### Authentification

L'application inclut une page de connexion basique pour l'accès aux fonctionnalités de gestion des produits.

## Utilisation de Redux

Les produits sont chargés et gérés via Redux. Voici les points clés :

- **Actions Redux** : Pour charger, ajouter, modifier et supprimer les produits.
- **Reducers** : Gestion de l'état des produits.
- **Store Redux** : Configuration du store global.

## Configuration de ESLint

Le projet utilise ESLint pour garantir la qualité du code. Vous pouvez vérifier le code avec ESLint en exécutant la commande suivante :
