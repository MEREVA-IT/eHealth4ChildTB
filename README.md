# eHealth4ChildTB

Projet frontend simple pour l'application eHealth4ChildTB — site statique avec Tailwind CSS (DaisyUI) et assets localisés (en/fr).

🌐 **Site en ligne :** [https://mereva-it.github.io/eHealth4ChildTB/](https://mereva-it.github.io/eHealth4ChildTB/)

## Description

Ce dépôt contient les sources du site statique du projet eHealth4ChildTB : pages HTML, styles et ressources. Le projet utilise Vite, Tailwind CSS et PostCSS pour le style, et est fourni avec des fichiers de localisation (`locales/en.json`, `locales/fr.json`).

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

## Déploiement sur GitHub Pages

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main` grâce à GitHub Actions.

### Configuration initiale

1. **Activer GitHub Pages** dans les paramètres du dépôt :
   - Aller dans `Settings` > `Pages`
   - Dans `Source`, sélectionner **GitHub Actions**

2. **Push sur la branche main** :
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. Le déploiement se lance automatiquement. Suivez la progression dans l'onglet **Actions** du dépôt.

4. Une fois déployé, le site sera accessible à : `https://mereva-it.github.io/eHealth4ChildTB/`

### Déploiement manuel

Pour déclencher un déploiement manuel :
- Aller dans l'onglet **Actions**
- Sélectionner le workflow **Deploy to GitHub Pages**
- Cliquer sur **Run workflow**
