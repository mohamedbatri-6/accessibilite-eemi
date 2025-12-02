#  Projet Accessibilité – Dashboard & Landing Page
##  Objectif du projet

Le projet consiste à reproduire deux maquettes :

Dashboard (Desktop + Mobile)

Landing Page (Desktop + Mobile)

En deux versions :

Version A – Non accessible
→ Reproduction volontaire avec erreurs (mauvaise sémantique, pas de labels, focus invisible, etc.)

Version B – Accessible
→ Correction complète selon les bonnes pratiques WCAG AA

Ce README explique clairement les corrections apportées dans la Version B.


# ✅ VERSION B — Corrections Apportées (accessible)

La version B applique toutes les règles WCAG AA demandées dans le PDF.

## ✔️ Structure HTML sémantique

Ajout de vrais landmarks :

<header>

<nav>

<main>

<footer>

Titres hiérarchisés (h1 > h2 > h3)

Nettoyage complet du DOM

## ✔️ Navigation clavier

Tous les éléments interactifs sont en <button> ou <a>

Focus visible (anneau violet)

Ordre logique du focus

Aucune action dépendante uniquement de la souris

## ✔️ Modale accessible

role="dialog"

aria-modal="true"

aria-labelledby

Fermeture avec Échap

Retour du focus sur le bouton qui a ouvert la modale

Focus automatique dans la modale

Focus trap (impossible de sortir accidentellement)

## ✔️ Formulaires accessibles

Ajout de vrais labels

for="" + id="" reliés

Champs obligatoires annoncés

Placeholders utilisés uniquement comme aides visuelles (et non comme labels)

Navigation possible entièrement au clavier

  
## ✔️ ARIA & Accessibilité

Ajout de aria-label sur les icônes (menu, fermer, ajouter…)

Images décoratives → alt=""

Images importantes → alt="description"

role="search" sur la barre de recherche

aria-describedby sur certains champs

## ✔️ Contrastes & perception

Amélioration du contraste des textes

Couleurs de boutons suffisamment visibles

Respect du ratio AA minimum

#  Résultat obtenu
✔️ Dashboard Desktop – Accessible
✔️ Dashboard Mobile – Accessible
✔️ Landing Desktop – Accessible
✔️ Landing Mobile – Accessible

Tous les écrans fonctionnent :

au clavier

au lecteur d’écran

avec focus visible

avec une modale totalement accessible
