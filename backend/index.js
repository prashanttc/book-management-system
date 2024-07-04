import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "prashant@31",
  database: "bookms",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
})
app.get("/login", (req, res) => {
  const q = "SELECT * FROM login";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/login" , (req,res)=>{
  const q = "SELECT * FROM login WHERE email = ? AND password = ?";
 
  db.query(q , [  req.body.email,
    req.body.password], (err,data)=>{
    if(err) return res.json(err);
    if(data.length > 0){
      return res.json("success")
    }
    else{
      return res.json("login failed")
    }
  })


})
app.post("/signup", (req, res) => {
  const q = "INSERT INTO login (`email`, `password`) VALUES (?, ?)";
  const { email, password } = req.body;

  db.query(q, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Signup failed: " + err.message });
    }
    if (result.affectedRows > 0) {
      return res.status(201).json("success");
    } else {
      return res.status(400).json("Signup failed: No rows affected");
    }
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});