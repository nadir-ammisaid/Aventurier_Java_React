<a href="#fr">
  <img src="https://flagcdn.com/w40/fr.png" width="20" alt="Français"> Français
</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="#en">
  <img src="https://flagcdn.com/w40/gb.png" width="20" alt="English"> English
</a>


<br/>
<br/>

<img id="fr" src="https://flagcdn.com/w40/fr.png" width="20" alt="Français"> Français

<h1>Aventurier</h1>

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

### - Backend (Java Spring Boot)

```bash
cd backend
./gradlew.bat bootRun
```

Fichiers requis dans src/main/resources :

- map.txt : la carte à afficher (avec # pour les murs et l'intérieur de la fôret, espace pour les chemins disponibles)

- moves.txt : coordonnées initiales au format x,y



### - Frontend (React)

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
  "lastPosition": { "x": 6, "y": 7 }
}
```


## Fonctionnement

1. Le frontend charge la carte et la position initiale au démarrage.

2. À chaque clic sur un bouton (⬆️⬇️⬅️➡️), une requête est envoyée au backend.

3. Le backend vérifie si le déplacement est autorisé, puis retourne la nouvelle position.

4. Le frontend met à jour la grille avec la nouvelle position.


## Auteur

Projet réalisé par [**Nadir AMMI SAID**](https://www.linkedin.com/in/nadir-ammisaid/) dans le cadre d’un **test technique** demandé par [**Cleva**](https://cleva-solutions.com/fr/), pour une alternance en développement full-stack, dans le cadre de mon **programme Master** (33 mois) **à [Epitech](https://www.epitech.eu/formation-alternance/pre-msc-post-bac2/).**

**💬 Vos retours sont les bienvenus !**  
📩 Vous pouvez me contacter sur LinkedIn : [https://www.linkedin.com/in/nadir-ammisaid/](https://www.linkedin.com/in/nadir-ammisaid/)


<br/>
<br/>

<img id="en" src="https://flagcdn.com/w40/gb.png" width="20" alt="English"> English

<h1 >Adventurer</h1>

A mini Java + React application to move a character on a map defined in a text file.

## Objective 
This project allows a user to move around a map using directional buttons.
The Java backend handles the movement logic, and the React frontend dynamically displays the map and character.

## Project structure (monorepo)
```
aventurier/
├── backend/
└── frontend/
```

## Stack
- Backend: Java + Spring Boot
- Frontend: React + TypeScript + Vite

## Running the project
### - Backend (Java Spring Boot)
```bash
cd backend
./gradlew.bat bootRun
```
Required files in src/main/resources:
- map.txt: the map to display (with # for walls and forest interior, space for available paths)
- moves.txt: initial coordinates in x,y format

### - Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

## API
| Method | Endpoint | Description |
|---------|----------|-------------|
| GET     | `/api/map` | Retrieves the map as an array |
| GET     | `/api/initial-position` | Retrieves the hero's initial position |
| POST    | `/api/new-position` | Returns the new position after movement |

Example body for /api/new-position:
```json
{
  "direction": "N",
  "lastPosition": { "x": 6, "y": 7 }
}
```

## How it works
1. The frontend loads the map and initial position at startup.
2. With each button click (⬆️⬇️⬅️➡️), a request is sent to the backend.
3. The backend checks if the movement is allowed, then returns the new position.
4. The frontend updates the grid with the new position.

## Author
Project created by [**Nadir AMMI SAID**](https://www.linkedin.com/in/nadir-ammisaid/) as part of a **technical test** requested by [**Cleva**](https://cleva-solutions.com/fr/), for a full-stack development internship, within the scope of my 33-month **Master's program at [Epitech](https://www.epitech.eu/formation-alternance/pre-msc-post-bac2/).**

**💬 Your feedback is welcome!**  
📩 You can contact me on LinkedIn: [https://www.linkedin.com/in/nadir-ammisaid/](https://www.linkedin.com/in/nadir-ammisaid/)