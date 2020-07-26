DROP DATABASE if exists mytunes;
CREATE DATABASE mytunes;

\c mytunes

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    avatar_url VARCHAR NOT NULL,
    is_deleted BOOLEAN
);

CREATE TABLE albums (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    artist VARCHAR NOT NULL,
    album_img_url VARCHAR NOT NULL
);

CREATE TABLE users_albums (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    album_id VARCHAR REFERENCES albums(id),
    is_deleted BOOLEAN 
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment_body VARCHAR NOT NULL,
    commenter_id INT REFERENCES users(id),
    album_id VARCHAR REFERENCES albums(id),
    is_deleted BOOLEAN
);

--INSERT USERS

INSERT INTO users (username, avatar_url, is_deleted) VALUES ('Owen Jones', 'https://images.unsplash.com/photo-1577373501666-d898a4ae2060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80', false);
INSERT INTO users (username, avatar_url, is_deleted) VALUES ('Matt Kurahara', 'https://images.unsplash.com/photo-1591607926780-b2fc1a8f390b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80', false);
INSERT INTO users (username, avatar_url, is_deleted) VALUES ('Omar Jones', 'https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80', false);
INSERT INTO users (username, avatar_url, is_deleted) VALUES ('Jahil Lamont', 'https://images.unsplash.com/photo-1592660503155-7599a37f06a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',false);


--ALBUMS

INSERT INTO albums (id, title, artist, album_img_url) VALUES ('79dL7FLiJFOO0EoehUHQBv','Currents','Tame Impala','https://i.scdn.co/image/ab67616d000048519e1cfc756886ac782e363d79');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('7ycBtnsMtyVbbwTfJwRjSP','To Pimp A Butterfly','Kendrick Lamar','https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('7dK54iZuOxXFarGhXwEXfF','Lemonade','Beyonce','https://i.scdn.co/image/ab67616d0000b27389992f4d7d4ab94937bf9e23');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('392p3shh2jkxUxY2VHvlH8', 'Channel Orange','Frank Ocean','https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('6mm1Skz3JE6AXneya9Nyiv', 'Oracular Spectacular','MGMT','https://i.scdn.co/image/ab67616d0000b2738b32b139981e79f2ebe005eb');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('2QJmrSgbdM35R67eoGQo4j', '1989','Taylor Swift','https://i.scdn.co/image/ab67616d0000b273c79b600289a80aaef74d155d');
INSERT INTO albums (id, title, artist, album_img_url) VALUES ('7f6xPqyaolTiziKf5R5Z0c', 'Golden Hour','Kacey Musgraves','https://i.scdn.co/image/ab67616d000048512e35d25eb7288830d5540484');

-- USERS AlBUMS RELATIONSHIP

INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (1,'79dL7FLiJFOO0EoehUHQBv', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (1,'6mm1Skz3JE6AXneya9Nyiv', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (1,'7f6xPqyaolTiziKf5R5Z0c', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (2,'7ycBtnsMtyVbbwTfJwRjSP', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (2,'6mm1Skz3JE6AXneya9Nyiv', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (3,'7dK54iZuOxXFarGhXwEXfF', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (4,'392p3shh2jkxUxY2VHvlH8', false);
INSERT INTO users_albums (user_id, album_id, is_deleted) VALUES (4,'2QJmrSgbdM35R67eoGQo4j', false);

--COMMENTS

INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('This is in my top 5 favorite albums of all time',2,'79dL7FLiJFOO0EoehUHQBv', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('The soundtrack to my life',3,'79dL7FLiJFOO0EoehUHQBv', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('U and Wesleys theory are the best songs on this',1,'7ycBtnsMtyVbbwTfJwRjSP', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('An absolute masterpiece',4,'7ycBtnsMtyVbbwTfJwRjSP', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('Queen Bey ftw',2,'7dK54iZuOxXFarGhXwEXfF', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('Frank has the voice of an angel',2,'392p3shh2jkxUxY2VHvlH8', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('Channel Orange > Blond',3,'392p3shh2jkxUxY2VHvlH8', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('Sonically this album offers a lot',1,'2QJmrSgbdM35R67eoGQo4j', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('In high school this album was everything',4,'6mm1Skz3JE6AXneya9Nyiv', false);
INSERT INTO comments (comment_body, commenter_id, album_id, is_deleted) VALUES ('Grammy was well deserved',3,'7f6xPqyaolTiziKf5R5Z0c', false);