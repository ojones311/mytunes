DROP DATABASE if exists mytunes;
CREATE DATABASE mytunes;

\c mytunes

CREATE TABLE users (
    id SERIAL PRIMARY KEY;
    username VARCHAR NOT NULL;
    avatar_url VARCHAR NOT NULL;
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY;
    genre_name VARCHAR NOT NULL;
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY;
    title VARCHAR NOT NULL;
    song_img_url VARCHAR NOT NULL;
    user_id INT REFERENCES users(id);
    genre_id INT REFERENCES genres(id); 
);
CREATE TABLE users_songs (
    id SERIAL PRIMARY KEY;
    user_id INT REFERENCES users(id);
    song_id INT REFERENCES songs(id);
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY;
    comment_body VARCHAR NOT NULL;
    user_id INT REFERENCES users(id);
    song_id INT REFERENCES songs(id);
)