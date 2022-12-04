# Lancement du projet
## Installation

Pour installer ce projet, vous devez le télécharger et le déziper.
Placez vous ensuite dans un terminal sur le dossier principal du projet et lancer la commande 
```
npm install
```
ou
```
npm i
```

## Execution
Une fois le projet installé, vous pouvez lancer son exécution avec la commande
```
npm start
```

La console devrait afficher le message suivant lorsque l'api est démarrée.
```
Listening on port 3000
```

## Fonctionnement
Actuellement l'api est en version démo, les données retournée sont générées aléatoirement et elle ne peut fournir la météo que pour une listes précise de villes.
En local elle sera accessible via l'url http://localhost/3000

### Liste des villes
- Paris
- Londres
- Berlin
- Lille
- Monpellier
- Marseille
- Gant
- Dublin
- Nantes
- Dijon

### Liste des météos
- Sun
- Cloud
- Rain
- SunCloud
- Thunder

### requêtes disponibles

#### Récupérer la météo d'une ville :

- méthode: GET
- url: /api/weather/<Ville>

Format de données de retour (json):

```
{
  "success": <boolean>,
  ?"data": {
    "city": <string>,
    "weather" : <string>,
    "temperature" : <int>
  },
  ?"error": <string>
}
```

exemple :
```
GET http://localhost:3000/weather/Paris
```
retour
```
{
  "success": true,
  "data": {
    "city": "Paris",
    "weather" : "Sun",
    "temperature" : 18
  }
}
```

```
GET http://localhost:3000/weather/Miami
```
retour
```
{
  "success": false,
  "error": "Ville introuvable"
}
```

#### Récupérer la météo de plusieurs ville :

- méthode: POST
- url: /api/weather/<Ville>
- header :
  - Content-type: application/json
- body : 
  - ```{ "cities": [<string>,...] }```
  

Format de données de retour (json):

```
[{
  "success": <boolean>,
  ?"data": {
    "city": <string>,
    "weather" : <string>,
    "temperature" : <int>
  },
  ?"error": <string>
},...]
```

exemple :
```
POST http://localhost:3000/weather/

{
  "cities": ["Paris","Londres","New York"]
} 
```
retour
```
[
  {
    "success": true,
    "data":{
      "city": "Paris",
      "weather": "Sun",
      "temp": 10
    }
  },
  {
    "success": true,
    "data":{
      "city": "Londres",
      "weather": "Thunder",
      "temp": 6
    }
  },
  {
    "success": false,
    "error": "Ville introuvable"
  }
]
```
