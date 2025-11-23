import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",       
  host: "localhost",
  database: "Movie_recommandation",      
  password: "Rudhar@35",
  port: 3000,
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("DB connection error:", err));

const app = express();
const PORT = 3001;


app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/',async(req,res)=>{
    
   try{
    const result = await db.query('SELECT * FROM movie ORDER by rating desc');
    res.render('index.ejs',{
        movies : result.rows
    });
   }catch{
    console.error(err);
    res.send("Error fetching movies");
   }
});

app.get("/add-movie", (req, res) => {
  res.render("add-movie.ejs"); 
});

app.post("/add-movie", async (req, res) => {
  const { title, genre, rating, description } = req.body;
  try {
    await db.query(
      `INSERT INTO movie (title, genre, rating, description)
       VALUES ($1, $2, $3, $4)`,
      [title, genre, rating, description]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Error adding movie");
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});