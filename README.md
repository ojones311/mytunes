# Mytunes

Mytunes is a full-stack application where users can post, comment on, and favorite albums that they are listening to.

- Users are able to **add albums** that they listen to. These albums are shared on their profile pages.
- Users can view the profile pages of other users and see the albums they are listening to.
- Users can **leave comments** on albums. Comments should include the comment's text as well as the username of the user who posted the comment.
- Users can search for albums in the Spotify API and add them to your personal list.

## Database Structure

Used PostgreSQL for the database 

- **users**
  - id
  - username - _Unique_
  - avatar_url
  - is_deleted

- **albums**
  - id - _Unique_
  - title
  - img_url

- **users_albums** 
  - id
  - user_id - _References Users_
  - album_id - _References Songs_
  -is_deleted 

- **comments**
  - id
  - comment_body
  - commenter_id - _References Users_
  - album_id - _References Albums_
  - is_deleted 


## API Endpoints
Using the Spotify API for access to a albums database

- **Users**

  | Method | Endpoint     | Description           | Properties sent in JSON body |
  | ------ | ------------ | --------------------- | ---------------------------- |
  | GET    | `/users`     | Get all users         | n/a                          |
  | GET    | `/users/id/:id` | Get single user by id | n/a                       |
  | POST   | `/users`     | Add new user          |  `username`,`avatar_url`     |  
  | PATCH  | `/users/edit/:id` | Edit a users info  | `username`,`avatar_url`    |
  | PATCH  | `/users/delete/:id` | Delete a user    | `username`,`avatar_url`    |

-**Albums**

  |Method  |  Endpoint     | Description           | Properties sent in JSON body |
  |------- |  ------------ | --------------------- | ---------------------------- |
  | GET    | `/albums/all` | Gets all albums       | n/a                         |
  | GET    | `/albums/userid/:userId` | Gets all albums by user id | n/a          |
  | GET    | `/albums/albumId/:albumId` | Gets album by its id | n/a              |
  | POST   | `/albums`     | Add a new album       | `id`, `user_id`, `title`, `artist`, `album_img_url` |
  | PATCH  | `/delete/:albumId/:userId` | Delete an album | n/a                    |
  
  
- **Comments**

  | Method | Endpoint         | Description               | Properties sent in JSON body |
  | ------ | ---------------  | ------------------------- | ----------------|
  | GET    | `/comments/album/:album_id` | Get all comments for specific album_id |  n/a    |
  | POST   | `/comments`      | Add new comment    | `comment_body`, `user_id`, `show_id` |
  | PATCH  | `comments/delete/:id` | Delete comment       |    n/a                       |


## Frontend

Uses React for the client and Material UI for CSS and styling

### Routes
| Route        | Feature                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Home route.                                                                                                                                                                                                                                                                                                                                                                             |
| `/users`     | Shows master list of all users. Shows the "logged in" user. Should be able to click on each username linking to the user profile page.                                                                                                                                                                                                                                                                                                                                              |
| `/users/:id` | User profile page. Shows all the songs the user is listening to. Must show the image, title, genre for each song. Users should be able to click on the song and take you to the song page.                                                                                                                                                                                                                                                                                              |
| `/songs`     | Masterlist of all the songs. For each show list all the users who are watching. Clicking on the name of the user takes you to that specific users profile page.                                                                                                                                                                                                                                                                                                                     |
| `/songs/add` | Displays two forms. The **Start watching show** form has a drop down list of all the songs in the app for the user to start listening to a song that is already in our database. The **Add a new show** form lets the user add a completely new song specifying image url, name and genre (dropdown list). The all-songs and genre drop down lists should reflect the genres and songs that are in the itu. The user will automatically start watching a new show they have added. |

| `/songs/:id` | A specific show's profile page. Shows the title, image, genre, number of comments and list of comments. Allows you to add new comments. The comment should be reflected immediately on the list without needing to refresh the page when a new comments is added.                                                                                                                                                                                                                   |
| `/about`     | Shows short description of what this app is about and who made it                                                                                                                                                                                                                                                                                                                                                                                                                  |


