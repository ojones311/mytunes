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

- **Albums**

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

Uses React for the client and React Bootstrap for CSS and styling

### Routes
| Route        | Feature                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Home route.                                                                                                                                                                                                                                                                                                                                                                             |
| `/users`     | Shows master list of all users. Should be able to click on each username linking to the user profile page.                                                                                                                                                                                                                                                                                                                            |
| `/profile/:id` | User profile page. Shows all the songs the user is listening to. Shows the image, title, genre for each album. Users should be able to click on the song and take you to the song page.                                                                                                                                                                                                                                                                                              |
| `/albums/all`     | Masterlist of all the albums. For each album list all the users who are watching. Clicking on the name of the user takes you to that specific users profile page.                                                                                                                                                                                                                                                                                                                     |
| `/albums/search_album` | Displays a search bar. Once the user searchs an album a list of albums closest to the criteria load. Shows the albums image, title, number of tracks, and release date. The **Add album** button lets the user add a completely new album to their profile. The user will automatically get redirected their profile page. |

| `/albums/id/:id` | A specific album's page. Shows the title,image, number of comments and list of comments. Allows you to add new comments. The comment is reflected immediately on the list without needing to refresh the page when a new comments is added.      |                                                                                                                    |                                                                                           
| `/about`     | Shows short description of what this app is about and who made it                                                                                                                                                                                                                                                                                                                                                                                                                  |


