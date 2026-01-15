# eHealth4ChildTB

Projet frontend simple pour l'application eHealth4ChildTB — site statique avec Tailwind CSS (DaisyUI) et assets localisés (en/fr).

## Description

Ce dépôt contient les sources du site statique du projet eHealth4ChildTB : pages HTML, styles et ressources. Le projet utilise Tailwind CSS et PostCSS pour le style, et est fourni avec des fichiers de localisation (`locales/en.json`, `locales/fr.json`).

## Prérequis

- Node.js (>=16 recommandé)
- npm ou yarn

## Installation

1. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

2. Lancer le serveur de développement (si un script est défini dans `package.json`) :

```bash
npm run dev
# ou
npm run start
```

3. Construire pour la production :

```bash
npm run build
```

Si les scripts `dev`, `start` ou `build` n'existent pas, vérifier `package.json` et adapter les commandes.

## Structure du projet

- `index.html`, `about.html`, `terms.html` — pages principales
- `src/` — sources JS/CSS (`main.js`, `style.css`)
- `public/assets/` et `assets/` — images et fichiers statiques
- `locales/` — fichiers de localisation (`en.json`, `fr.json`)
- `tailwind.config.js`, `postcss.config.js` — configuration des styles

## Localisation

Le site contient des fichiers de traduction en `locales/en.json` et `locales/fr.json`. Pour ajouter ou modifier des traductions, éditez ces fichiers.
