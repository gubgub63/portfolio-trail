# Portfolio Enzo Gubbiotti

Portfolio statique en HTML, CSS et JavaScript vanilla.

## Lancer en local

Ouvre `index.html` dans un navigateur ou lance un serveur local :

```bash
php -S localhost:8000
```

## Déployer sur GitHub Pages

1. Créer un dépôt GitHub.
2. Depuis ce dossier :

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```

3. Dans GitHub : `Settings` -> `Pages` -> `Build and deployment` -> `Source` -> `GitHub Actions`.
4. Le workflow `.github/workflows/pages.yml` publiera automatiquement le site à chaque push sur `main`.
