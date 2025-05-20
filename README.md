# Aventurier

Une mini application Java + React pour déplacer un personnage sur une carte définie dans un fichier texte.


## Objectif 
Ce projet permet à un utilisateur de se déplacer sur une carte en utilisant des boutons directionnels.
Le backend en Java gère la logique de déplacement, et le frontend en React affiche dynamiquement la carte et le personnage.


## Arborescence du projet (monorepo)

```
aventurier/
├── backend/
└── frontend/
```


## Stack

- Backend : Java + Spring Boot
- Frontend : React + TypeScript + Vite


## Lancer le projet

- Backend (Java Spring Boot)

```bash
cd backend
./gradlew.bat bootRun
```

Fichiers requis dans src/main/resources :

- map.txt : la carte à afficher (avec # pour les murs, espace pour les chemins)

- moves.txt : coordonnées initiales au format x,y



- Frontend (React)

```bash
cd frontend
npm install
npm run dev
```


## API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET     | `/api/map` | Récupère la carte sous forme de tableau |
| GET     | `/api/initial-position` | Récupère la position initiale du héros |
| POST    | `/api/new-position` | Retourne la nouvelle position après déplacement |



Exemple de body pour /api/new-position :

```json
{
  "direction": "N",
  "lastPosition": { "x": 2, "y": 3 }
}
```


## Fonctionnement

1. Le frontend charge la carte et la position initiale au chargement.

2. À chaque clic sur un bouton (⬆️⬇️⬅️➡️), une requête est envoyée au backend.

3. Le backend vérifie si le mouvement est possible, puis retourne la nouvelle position.

4. Le frontend met à jour la grille avec la nouvelle position.
