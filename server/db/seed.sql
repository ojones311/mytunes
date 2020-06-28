DROP DATABASE if exists mytunes;
CREATE DATABASE mytunes;

\c mytunes

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    avatar_url VARCHAR NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR NOT NULL
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    spotify_id VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    artist VARCHAR NOT NULL,
    album_img_url VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    genre_id INT REFERENCES genres(id)
);

CREATE TABLE users_albums (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    album_id INT REFERENCES albums(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    user_id INT REFERENCES users(id),
    commenter_id INT REFERENCES users(id),
    album_id INT REFERENCES albums(id)
);

--INSERT USERS

INSERT INTO users (username, avatar_url) VALUES ('Owen Jones', 'https://images.unsplash.com/photo-1577373501666-d898a4ae2060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
INSERT INTO users (username, avatar_url) VALUES ('Matt Kurahara', 'https://images.unsplash.com/photo-1591607926780-b2fc1a8f390b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80');
INSERT INTO users (username, avatar_url) VALUES ('Omar Jones', 'https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80');
INSERT INTO users (username, avatar_url) VALUES ('Jahil Lamont', 'https://images.unsplash.com/photo-1592660503155-7599a37f06a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');

--INSERT GENRES

INSERT INTO genres (genre_name) VALUES ('Hip-Hop/Rap'); --1
INSERT INTO genres (genre_name) VALUES ('Rock and Roll'); --2
INSERT INTO genres (genre_name) VALUES ('Indie'); --3
INSERT INTO genres (genre_name) VALUES ('Jazz'); --4
INSERT INTO genres (genre_name) VALUES ('Country'); --5
INSERT INTO genres (genre_name) VALUES ('Pop'); --6
INSERT INTO genres (genre_name) VALUES ('R&B'); --7

--ALBUMS
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('79dL7FLiJFOO0EoehUHQBv','Currents','Tame Impala','https://i.scdn.co/image/ab67616d000048519e1cfc756886ac782e363d79',1,3);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('7ycBtnsMtyVbbwTfJwRjSP','To Pimp A Butterfly','Kendrick Lamar','https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1',2,1);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('7dK54iZuOxXFarGhXwEXfF','Lemonade','Beyonce','https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23',3,6);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('392p3shh2jkxUxY2VHvlH8', 'Channel Orange','Frank Ocean','https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5',4,7);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('6mm1Skz3JE6AXneya9Nyiv', 'Oracular Spectacular','MGMT','https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb',1,3);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('2QJmrSgbdM35R67eoGQo4j', '1989','Taylor Swift','https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d',4,6);
INSERT INTO albums (spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ('2QJmrSgbdM35R67eoGQo4j', 'Golden Hour','Kacey Musgraves','https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d',1,5);

-- USERS AlBUMS RELATIONSHIP

INSERT INTO users_albums (user_id, album_id) VALUES (1,1);
INSERT INTO users_albums (user_id, album_id) VALUES (1,5);
INSERT INTO users_albums (user_id, album_id) VALUES (1,7);
INSERT INTO users_albums (user_id, album_id) VALUES (2,2);
INSERT INTO users_albums (user_id, album_id) VALUES (3,3);
INSERT INTO users_albums (user_id, album_id) VALUES (4,4);
INSERT INTO users_albums (user_id, album_id) VALUES (4,6);

--COMMENTS

INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('This is in my top 5 favorite albums of all time',1,2,1);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('The soundtrack to my life',1,3,1);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('U and Wesleys theory are the best songs on this',2,1,2);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('An absolute masterpiece',2,4,2);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('Queen Bey ftw',3,2,3);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('Frank has the voice of an angel',4,2,4);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('Channel Orange > Blond',4,3,4);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('Sonically this album offers a lot',4,1,6);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('In high school this album was everything',1,4,5);
INSERT INTO comments (comment_body, user_id, commenter_id, album_id) VALUES ('Grammy was well deserved',1,3,7);