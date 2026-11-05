import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("you got the notes");
})

app.listen(3000, () => {
    console.log("server started on port: 3000");
});