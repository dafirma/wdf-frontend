# Project Name
 WHAT DA FOOD
## Description
 WHAT DA FOOD is an app that help you to track 
Describe your project in one/two lines.

## User Stories

-  **404** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup** As an anon I can sign up in the platform so that I can start to setup my food storage
-  **Login** As a user I can login to the platform so that I can see my food storage 
-  **Logout** As a user I can logout from the platform so no one else can use it
-  **Add Food** As a user I can add a food in my depository
-  **List of Recipes** As a user I want to see the recipes so that I can choose one to prepare
-  **Search Recipes** As a user I want to search recipes by ingredients/style/time preparation 
-  **Add to favorites** As a user I want to add a recipe to favorite so that I can save the recipes that I liked the most
-  **See my favorites** As a user I want to see my favorite recipes so that I can see the ones I liked the most
-  **See my food storage** As a user I want to see the items I have in my food storage as well the quantity 

## Backlog

Food Storage
- Warning when the food storage is finishing
- dashboard with  different recipes based on the user settings
- share the  favorite recipes to other users


Homepage:
- ...
  
# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | true | landing page |
| `/signup` | true | Signup user |
| `/login` | true | login user |
| `/profile` | false | profile of user |
| `/favorite` | false | favorite recipes |
| `/storage` | false | food storage |

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()npm install --save react-router-npm install --save react-router-domdom
  - auth.me()
  - auth.getUser() // synchronous
  
- Recipe Service
  - recipe.list()
  - recipe.search(terms)
  - recipe.detail(id)
  - recipe.addFavorite(id)
  - recipe.removeFavorite(id)  

- Food Storage Service
  - storage.list()
  - storage.addFood()
  - storage.detail(id)
  - storage.removeFood(id)

# Server

## Models

User model


``` 
username - String // required
email - String // required & unique
password - String // required
Food Preference - [{ type: String, Duration: Number, Intolerance: String}]

storage - [{ name: String, quantity: Number, image: String }]

favRecipe - [ObjectID<Recipe>] 


SUB SCHEMA

Recipe model

```
title: String
ingredients: String
description: String
duration: Number


## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|

|GET|api/|dashboard|show the a list of recipes based on preferences|
|GET|api/recipe/search|search for recipe|
|GET|api/recipe/search/list|show a list of recipes|
|GET|api/recipe/:id|show details of recipe|
|GET|api/storage|show list of products|



|URL|HTTP verb|Request body|Action|
|/api/recipes|GET|(empty)|returns all the recipes|
|/api/recipes|POST|JSON|add a new recipe to favorite|
|/api/favorite||||
|/api/favorite/:id|PUT|JSON|edits a favorite|
|/api/favorite/:id|DELETE|(empty)|deletes the favorite|
|||||
  

## Links

### Trello/Kanban

[https://trello.com/b/GDfcBbkG/whatdafood](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-frontend-module-3)

[Server repository Link](https://github.com/Ironhack-PartTime-BCN/boilerplate-backend-module-3)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()

### Slides

The url to your presentation slides

[https://slides.com/dafirma/what-da-food/](http://slides.com)
