# Site F-Gl — Fabien Gentil

Site vitrine statique (HTML/CSS/JS, sans dépendance de build) prêt à être publié.

## Structure

```
index.html               Accueil
profil.html               Profil / CV
digital.html               F-Gl Digital
estate.html                F-Gl Estate
project-management.html    F-Gl Project Management
blog.html                   Blog / Articles
assets/css/style.css        Feuille de style unique (charte F-Gl)
assets/js/main.js           Navigation, langue, animations
assets/docs/CV_Fabien_Gentil.pdf   CV téléchargeable (bouton sur la page Profil)
```

## Langues

Le site est disponible en français, anglais et espagnol. Chaque texte existe
directement dans le HTML, dans des blocs `data-lang-block="fr|en|es"` : seul
le bloc correspondant à la langue active est affiché (géré par
`assets/js/main.js` + `assets/css/style.css`). La langue choisie est
mémorisée dans le navigateur (localStorage).

Pour modifier un texte : cherchez la ligne portant la langue voulue et
éditez-la directement, dans les 3 fichiers de langue si le changement doit
s'appliquer partout.

## Publication

Ce site est 100% statique : il peut être déposé tel quel sur n'importe quel
hébergement (Netlify, Vercel, GitHub Pages, OVH, o2switch, etc.). Aucune
étape de build n'est nécessaire.

1. Déposez l'intégralité du dossier sur votre hébergement.
2. Vérifiez que `index.html` est bien servi à la racine du domaine.
3. Le bouton « Télécharger le CV » pointe vers
   `assets/docs/CV_Fabien_Gentil.pdf` — remplacez ce fichier par une version
   plus récente si besoin (en conservant le même nom, ou en mettant à jour
   le lien dans `profil.html`).

## Personnalisation rapide

- Couleurs et polices : variables CSS en haut de `assets/css/style.css`
  (`--primary`, `--accent`, `--secondary`, `--light`).
- Coordonnées (téléphone, email, LinkedIn) : présentes dans chaque page,
  section `#contact` et pied de page — à mettre à jour partout en cas de
  changement.
- Tarifs des offres (Digital / Estate / Project Management) : actuellement
  « Sur devis » dans les blocs `.feature-side` — à remplacer par un montant
  si vous souhaitez afficher un prix d'appel.
- Articles de blog : `blog.html` contient 3 aperçus prêts à être complétés
  (le lien « Bientôt disponible » est à transformer en lien vers l'article
  complet une fois rédigé).
