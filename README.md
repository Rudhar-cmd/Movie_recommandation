# Movie Recommendation App (Express + PostgreSQL + EJS)

UI_UX:
  - description: |
      A movie recommendation web application built using Express.js, PostgreSQL,
      and EJS templating. Users can view top-rated movies, add new movies through
      a form, and display posters, ratings, genre, and descriptions.
      Movies are sorted by rating in descending order.
  - preview_image:
  -  <img width="1006" height="680" alt="Screenshot 2025-11-23 at 7 47 30 PM" src="https://github.com/user-attachments/assets/0954ead9-a804-4157-b0b2-67a4b200f849" />

# Features
Features:
  - View all movies sorted by highest rating
  - Add new movies with title, genre, rating, poster image URL, and description
  - Display movie poster, rating, genre, and details in a card layout
  - Server-side rendering using EJS
  - PostgreSQL database integration
  - Styled UI with clean layout and form design

# Technologies Used
Technologies_Used:
  - Node.js
  - Express.js
  - PostgreSQL (pg package)
  - EJS Templating
  - HTML5
  - CSS3
  - Body-Parser

# Project Structure
Project_Structure:
  - server:
      - index.js (main Express server)
  - views:
      - index.ejs (display movies)
      - add-movie.ejs (form to add movies)
  - public:
      - styles.css (UI styling)
  - database:
      - movie table with:
          - id (serial, primary key)
          - title (text)
          - genre (text)
          - rating (float)
          - poster_url (text)
          - description (text)

# Routes
Routes:
  - GET "/":
      - Fetch all movies sorted by rating
      - Render index.ejs
  - GET "/add-movie":
      - Render add-movie.ejs form
  - POST "/add-movie":
      - Insert new movie into PostgreSQL
      - Redirect to home page

# Database Config
Database_Config:
  - user: postgres
  - host: localhost
  - database: Movie_recommandation
  - password: *********
  - port: 3000

# Installation
Installation:
  - git clone https://github.com/Rudhar-cmd/movie-recommandation.git
  - cd movie-app
  - npm install
  - Update PostgreSQL credentials in code
  - Run SQL to create "movie" table
  - node index.js

# Usage
Usage:
  - Open http://localhost:3001
  - Click "Add New Movie" to insert a film
  - Submit title, genre, rating, poster image URL, and description
  - View all movies sorted by rating on homepage

# Example Movie
Example_Movie:
  - title: "Avengers: Endgame"
  - genre: "Action"
  - rating: 9.2
  - poster_url: "https://example.com/poster.jpg"
  - description: "Heroes unite to undo the damage caused by Thanos."

# License
License:
  - MIT

# Author
Author:
  - Rudhar
