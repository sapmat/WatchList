# Watch With Me

## Description

This site is built for users to create groups with their friends and to keep track of watch movie or show they want to watch together.
Users can create a new

## Routes

### /film

POST /

- add film to db
- body:
  > name: string - the name of the film
  > style: FilmStyle - the style of the film
  > type: FilmType - the type of the film
  > image: Buffer - the image of the film (optional)
  > episodeCount: number - the number of episodes in the series
- return value:
  > ### Success
  >
  > - 201 - adds a new film to the db
  >
  > ### Error
  >
  > - 400 - film already exists

GET /

- get any film by it's id
- body:
  > filmIds: string[] - the ids of the films you want to get

POST /all

- get all films by filter
- body: (all optional, all are the values of the filter to get all the films by)
  > name: string - the name of the fil
  > style: FilmStyle | "" - the style of the film
  > type: FilmType | "" - the type of the film
  > averageRating: { start: number, end: number } - the average rating range of the film
  > created: { start: number, end: number } - the date range of the film was created at

PATCH /:id

- update a film details
- params:
  > id: ObjectId - the id of the film you want to patch

### /user

POST /register

- add user to db
- body:
  > email: string - the user's email
  > password: string - the user's password
  > displayName: string - the display name of the user
- return value:
  > ### Success
  >
  > - 201 - adds a new user to the db
  >
  > ### Error
  >
  > - 400 - email already registered

POST /login

- get user by id
- body:
  > email - the email of the user
  > password - the password of the user
- return value:
  > ### Success
  >
  > - 200 - returns the logged in user
  >
  > ### Error
  >
  > - 404 - user not found

GET /:id

- get user by id
- params:
  > id - the id of the user
- return value:
  > ### Success
  >
  > - 200 - returns the user with the id
  >
  > ### Error
  >
  > - 404 - user not found

PATCH /:id

- update user info
- params:
  > id - the id of the user
- return value:
  > ### Success
  >
  > - 200 - returns the updated user
  >
  > ### Error
  >
  > - 404 - user not found

### /group

POST /

- add new group
- body:
  > name: string - the name of the group
  > image: string - the image src path name of the image of the group's profile picture
  > description: string - the description of the group
  > createdBy: ObjectId - the id of the user the created
  > films: GroupFilm[] - the ids of the films the group is watching
- return value:
  > ### Success
  >
  > - 201 - returns the new group

GET /:id

- get group by id
- params:
  > id: string - the id of the group
- return value:
  > ### Success
  >
  > - 200 - returns the group with the id
  >
  > ### Error
  >
  > - 404 - user not found

PATCH /:id - update group info

## Models

### Film

- id: ObjectId - the id of the film document
- filmId: string - the id of the film ({2 char style}{2 char type}{7 digits}) (custom and unique)
- style: FilmStyle - the style of the movie
- type: FilmType - the type of the movie
- name: string - the name of the movie
- totalRating: number - the total rating of the movie of all ratings of each user
- totalRaters: number - the total users that rated this movie
- image: Buffer - an image in buffer form the movie
- episodes: { name: string }

### User

- id: ObjectId - the id of the user document
- userId: string - the id of the user (u{9 digits}) (custom and unique)
- email: string - the user's email (unique)
- password: string - the user's password
- displayName: string - the user's display name
- groups: ObjectId[] - the id's of all the groups that the user is in
- personalList: ObjectId[] - the ids of the films the user has in it's personal watch list
- films: UserFilm[] - all the films a user has in any list and the rating he gives it

### Group

- id: ObjectId - the id of the group document
- groupId: string - the id of the group ({2 char style}{2 char type}{7 digits}) (custom and unique)
- name: string - the name of the group
- description: string - the description of the group
- films: GroupFilm[] - an array of the films in the group
- createdBy: ObjectId - the id of the user that created the group
- createdAt: Date - the date the group was created at

## Interface

### UserFilm

- id: ObjectId - the id of the film
- rating: number - the rating that a user gives this film

### GroupFilm

- filmId: ObjectId - the id of the film
- watchStatus: WatchStatus - the watch status of the movie within the group

## Enum

### FilmStyle

- ANIME = "Anime"
- CARTOON = "Cartoon"
- LIVE_ACTION = "Live action"

### FilmType

- MOVIE = "Movie"
- SERIES = "Series"

### WatchStatus

- TO_WATCH = "To Watch"
- WATCHING = "Watching"
- WATCHED = "Watched"
- STOPPED = "Stopped"
