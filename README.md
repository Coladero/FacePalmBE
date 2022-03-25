
# FacePalmBE


# Description
APP Web for football scouts to connect with other scouts from all over the world and to share experience for the newer scouts and to give motivation and enthusiasm to the more experienced ones.

# User Stories

* 200 - Everything is OK.
* 404 - The route is not found or have a error.
* 500 - Error that is a mistake from the DEV.


# Models

    * User.Model
    * Player.Model
    * Chat.Model
    * Message.Model

# Middleware

* IsAuthed

    - Check if the user have the token.

# API Routes (Back-end)


* POST /auth/signup
    -Check if has a token.
    -If has token redirect to /auth/login

- Body:

    Name
    Surname
    Email
    Password

* POST /auth/login

    -Check if has token.
    -If has token redirect /profile

    - Body:

        Email
        Password

* POST /api/countries

    -Get countries from API and send to the front-end.

* POST /api/countries/:id/players

    -Get players from the API and take the players from this country ID and send to the front-end.

* POST /api/countries/:id/players/details

    -Get player's details from the API and send to the front-end.

* GET /players/player/:id/edit

    -Get the info from the front-end and give to the DB.

* POST /players/player/add/:id

    -Get info from the front-end and make the model in the DB

    - Body:
    player_id,
    display_name,
    image_path,
    player_id,
    display_name, 
    shooting, 
    dribbling, 
    running, 
    ballControl

* PATCH /players/player/:id/edit

    -Get the info from the DB and send to the from to edit and wait for the response from the front-end.

* DELETE /player/:id/delete

    -Get the deatils from the players and delete from the DB

* GET /profile/profile

    -Get the profile by id from the DB and send to the front-end by id.

* GET /profile/agenda

    -Get the agenda from the DB and send to the front-end by id.

* GET /chat/users

    Get Users from the DB and send All to the front-end.

* POST /chat/messenger/:userId

    -Create the chat from id or take the chat if exist.

* GET /messages/:chatId

    -Get the messages from the DB and send to the front-end.

